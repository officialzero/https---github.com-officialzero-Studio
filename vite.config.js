import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // ==========================================================
  // 1. GitHub Pages 배포를 위한 핵심 설정 (MUST HAVE)
  base: '/Studio/',
  // ==========================================================
  
  // 2. React 컴포넌트를 빌드하기 위한 플러그인
  plugins: [react()],

  // 3. 모듈 해석(Resolution) 설정 (경로 별칭 설정)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // 'build', 'root' 등의 경로 명시 옵션은 모두 제거하여 Vite의 기본 동작을 따릅니다.
});