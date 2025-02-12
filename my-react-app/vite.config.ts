
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import path from 'path'
    
    export default defineConfig({
        plugins: [react()],
        server: {
            host: '0.0.0.0',
            port: 5174,
            strictPort: true,
            hmr: {
                clientPort: 5174
            }
        },
        build: {
            outDir: 'dist',
            emptyOutDir: true
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        }
    })