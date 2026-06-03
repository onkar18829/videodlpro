import { BaseProvider, VideoMetadata } from './BaseProvider';
import YTDlpWrap from 'yt-dlp-wrap';

const ytDlp = new YTDlpWrap('/usr/local/bin/yt-dlp');

export class InstagramProvider extends BaseProvider {
  protected name = 'instagram';

  canHandle(url: string): boolean {
    const instagramRegex = /^(https?:\/\/)?(www\.)?(instagram\.com)\/.+$/;
    return instagramRegex.test(url);
  }

  async getMetadata(url: string, retryCount = 0): Promise<VideoMetadata> {
    const MAX_RETRIES = 2;
    
    try {
      const info = await ytDlp.execPromise([
        url,
        '--dump-json',
        '--no-check-certificate',
        '--no-playlist',
        '--user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        '--socket-timeout', '30',
        '--geo-bypass',
        '-f', 'b'
      ]);

      const data = JSON.parse(info);

      const thumbnailUrl = (data.thumbnails && data.thumbnails.length > 0) 
        ? data.thumbnails[data.thumbnails.length - 1].url 
        : data.thumbnail;

      const formats = (data.formats || []).map((f: any) => ({
        url: f.url,
        quality: f.format_note || (f.height ? `${f.height}p` : 'audio'),
        hasVideo: !!f.vcodec && f.vcodec !== 'none',
        hasAudio: !!f.acodec && f.acodec !== 'none',
        ext: f.ext || 'mp4',
        sizeEstimate: f.filesize || undefined
      }));

      return {
        id: data.id,
        title: data.title,
        duration: data.duration || 0,
        thumbnailUrl,
        platform: 'instagram',
        formats
      };
    } catch (error: any) {
      if (retryCount < MAX_RETRIES) {
        // Wait 1s before retry
        await new Promise(resolve => setTimeout(resolve, 1000));
        return this.getMetadata(url, retryCount + 1);
      }
      throw new Error(`Instagram Extraction Failed: ${error.message}`);
    }
  }
}
