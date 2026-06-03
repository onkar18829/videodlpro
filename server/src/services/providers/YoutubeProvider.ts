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
      const info = await ytDlp.getVideoInfo(url);

      const formats = (info.formats || []).map((f: any) => ({
        url: f.url,
        quality: f.format_note || f.height ? `${f.height}p` : 'audio',
        hasAudio: !!f.acodec && f.acodec !== 'none',
        ext: f.ext || 'mp4',
        sizeEstimate: f.filesize || undefined
      }));

      return {
        id: info.id,
        title: info.title,
        duration: info.duration || 0,
        thumbnailUrl: info.thumbnail,
        platform: 'youtube',
        formats
      };
    } catch (error: any) {
      throw new Error(`YouTube Extraction Failed: ${error.message}`);
    }
  }
}