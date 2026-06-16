import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 42048,
    proxy: {
      '/api': {
        target: 'http://localhost:42049',
        changeOrigin: true,
      },
    },
  },
});
