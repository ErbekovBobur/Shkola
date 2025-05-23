import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Корневая папка проекта
  base: '/Shkola/',    // <--- вот эта строчка нужна для правильных путей
  build: {
    outDir: 'dist',    // Папка для сборки
    emptyOutDir: true, // Очищать папку перед сборкой
  },
});
