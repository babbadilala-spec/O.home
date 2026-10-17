export type VideoItem = {
  id: string;
  title: string;
  url: string;
  catId?: string;
  date?: string;
};

// 빌드 에러 방지를 위한 빈 스토어/함수 선언
export function videoCatsOf(): string[] {
  return [];
}
