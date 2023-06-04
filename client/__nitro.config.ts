import { createProxyMiddleware } from 'http-proxy-middleware'

export default {
  server: {
    middleware: {
      '/api': createProxyMiddleware({
        target: 'http://localhost:4444',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
      }),
    },
  },
}