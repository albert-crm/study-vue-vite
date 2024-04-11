/// <reference types="vite/client" />


//关于编辑器提示
interface ImportMetaEnv {
  readonly VITE_APP_API_URL: string
	readonly NODE_ENV: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}