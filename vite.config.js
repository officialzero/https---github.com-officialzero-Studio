import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Vite 설정 파일: https://vitejs.dev/config/
export default defineConfig({
  // ==========================================================
  // 1. GitHub Pages 배포를 위한 핵심 설정 (MUST HAVE)
  // GitHub Pages는 서브 경로(inserview-studio)에 배포되므로, base 경로를 지정해야 합니다.
  base: '/Studio/', 
  // ==========================================================
  
  // 2. 빌드 관련 설정
  build: {
    // 빌드 결과물이 저장될 폴더 (기본값: dist)
    outDir: 'dist',
    // 빌드의 루트 디렉토리를 현재 디렉토리('.')로 지정하여 index.html을 찾도록 함
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    }
  },

  // 3. React 컴포넌트를 빌드하기 위한 플러그인
  plugins: [react()],

  // 4. 모듈 해석(Resolution) 설정 (경로 별칭 설정)
  resolve: {
    alias: {
      // "@" 경로를 현재 디렉토리(__dirname) 기준으로 "src" 폴더로 매핑합니다.
      "@": path.resolve(__dirname, "./src"),
    },
  },
});