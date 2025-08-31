import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using root base for Ionios hosting; adjust if provider requires a subpath
  base: "/",
  server: {
    port: 3000,
    open: true,
    // Override any default CSP with a permissive one for development
    headers: {
      "Content-Security-Policy":
        "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; connect-src * 'unsafe-inline'; script-src * 'unsafe-inline' 'unsafe-eval'; style-src * 'unsafe-inline' https:; font-src * data:; img-src * data: blob:;",
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Simple vendor chunk splitting
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-framer": ["framer-motion"],
          "vendor-lucide": ["lucide-react"],
        },
        // Better chunk naming
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/\.(css)$/.test(assetInfo.name)) {
            return `css/[name]-[hash].${ext}`;
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `images/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        },
      },
    },
    // Enable minification with terser
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        // Additional security: remove function names and source info
        keep_fnames: false,
        keep_classnames: false,
      },
      mangle: {
        // Mangle function names for security
        keep_fnames: false,
        keep_classnames: false,
      },
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion", "lucide-react"],
  },
  // Security: disable source maps in production
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === "development"),
  },
});
