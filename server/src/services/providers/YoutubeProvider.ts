import { BaseProvider, VideoMetadata } from './BaseProvider';
import ytdl from 'ytdl-core';

export class YoutubeProvider extends BaseProvider {
  protected name = 'youtube';

  canHandle(url: string): boolean {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    return youtubeRegex.test(url);
  }

  async getMetadata(url: string): Promise<VideoMetadata> {
    try {
      const info = await ytdl.getInfo(url);
      
      const formats = info.formats.map(f => ({
        url: f.url,
        quality: f.qualityLabel || (f.hasVideo ? `${f.height}p` : 'audio'),
        hasAudio: f.hasAudio,
        ext: f.container || 'mp4',
        sizeEstimate: f.contentLength ? parseInt(f.contentLength) : undefined
      }));

      return {
        id: info.videoDetails.videoId,
        title: info.videoDetails.title,
        duration: parseInt(info.videoDetails.lengthSeconds),
        thumbnailUrl: info.videoDetails.thumbnails[0].url,
        platform: 'youtube',
        formats
      };
    } catch (error: any) {
      throw new Error(`YouTube Extraction Failed: ${error.message}`);
    }
  }
}
