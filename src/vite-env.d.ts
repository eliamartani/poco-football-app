/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
