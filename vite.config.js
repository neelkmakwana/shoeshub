import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : "/shoeshub/",
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      razorpay: 'razorpay/dist/razorpay.min.js', // Adjust the path as needed
    },
  },
})
