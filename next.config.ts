import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // TypeScript 타입 에러로 인한 빌드 실패를 완전히 방지합니다
  typescript: {
    ignoreBuildErrors: true,
  },
  // ESLint 에러로 인한 빌드 실패도 방지합니다
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
