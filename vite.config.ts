import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vue3-editor',
      fileName: 'vue3-editor',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue', 'quill'],
      output: {
        globals: {
          vue: 'Vue',
          quill: 'Quill'
        },
      },
    },
    emptyOutDir: true,
  },
  plugins: [vue()],
});
