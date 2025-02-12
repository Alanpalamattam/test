
                        import { defineConfig } from 'vite'
                        import react from '@vitejs/plugin-react'
                        import path from 'path'
                        
                        export default defineConfig({
                            plugins: [react()],
                            root: 'C:/Users/alanp/CodeSyncProjects/default',
                            publicDir: path.resolve('C:/Users/alanp/CodeSyncProjects/default', 'public'),
                            server: {
                                host: '0.0.0.0',
                                port: 5174,
                                strictPort: true,
                                hmr: {
                                    clientPort: 5174
                                }
                            },
                            resolve: {
                                alias: {
                                    '@': path.resolve('C:/Users/alanp/CodeSyncProjects/default', 'src')
                                }
                            },
                            optimizeDeps: {
                                force: true
                            },
                            cacheDir: path.resolve('C:/Users/alanp/CodeSyncProjects/default', 'node_modules/.vite')
                        })