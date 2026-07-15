import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 新增下面這一行，設定 GitHub Pages 的 Repository 名稱
  base: '/Examination-system-v2.0/', 
})
