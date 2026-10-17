export type VideoItem = {
  id: string;
  title: string;
  url: string;
  catId?: string;
  date?: string;
};

export type VideoPost = VideoItem;

export const VIDEO_KEY = 'videos';
export const VIDEO_SEED = [];

// 빌드 에러를 방지하기 위해 누락된 함수들을 모두 추가합니다
export function videoCatsOf(): string[] {
  return [];
}

export function videoEmbed(url: string): string {
  return url;
}
