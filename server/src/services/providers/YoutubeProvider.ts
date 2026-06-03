import { BaseProvider, VideoMetadata } from './BaseProvider';
import YTDlpWrap from 'yt-dlp-wrap';

const ytDlp = new YTDlpWrap('/usr/local/bin/yt-dlp');

export class YoutubeProvider extends BaseProvider {
  protected name = 'youtube';

  canHandle(url: string): boolean {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    return youtubeRegex.test(url);
  }

  async getMetadata(url: string): Promise<VideoMetadata> {
    try {
      const info = await ytDlp.execPromise([
        url,
        '--dump-json',
        '--no-check-certificate',
        '--no-playlist',
        '--extractor-args', 'youtube:player_client=android',
        '--legacy-server-connect',
        '-f', 'b'
      ]);

      const data = JSON.parse(info);

      // Get the best thumbnail from the array or fallback to top-level property
      const thumbnailUrl = (data.thumbnails && data.thumbnails.length > 0) 
        ? data.thumbnails[data.thumbnails.length - 1].url 
        : data.thumbnail;

      const formats = (data.formats || []).map((f: any) => ({
        url: f.url,
        quality: f.format_note || (f.height ? `${f.height}p` : 'audio'),
        hasAudio: !!f.acodec && f.acodec !== 'none',
        ext: f.ext || 'mp4',
        sizeEstimate: f.filesize || undefined
      }));

      return {
        id: data.id,
        title: data.title,
        duration: data.duration || 0,
        thumbnailUrl,
        platform: 'youtube',
        formats
      };
    } catch (error: any) {
      throw new Error(`YouTube Extraction Failed: ${error.message}`);
    }
  }
}