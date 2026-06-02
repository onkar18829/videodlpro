export interface VideoMetadata {
  id: string;
  title: string;
  duration: number;
  thumbnailUrl: string;
  platform: string;
  formats: VideoFormat[];
}

export interface VideoFormat {
  url: string;
  quality: string;
  hasAudio: boolean;
  sizeEstimate?: number;
  ext: string;
}

export abstract class BaseProvider {
  protected abstract name: string;

  /**
   * Check if this provider can handle the given URL.
   */
  abstract canHandle(url: string): boolean;

  /**
   * Extract metadata and available formats for the given URL.
   */
  abstract getMetadata(url: string): Promise<VideoMetadata>;
}
