import { defineConfig } from 'vite';

export default defineConfig({
    root: '.', // Корневая папка проекта
    build: {
        outDir: 'dist', // Папка для сборки
        emptyOutDir: true, // Очищать папку перед сборкой
    },
});