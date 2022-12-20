/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RAPIDAPI_KEY: string;
  readonly VITE_RAPIDAPI_HOST: string;
  readonly VITE_RAPIDAPI_URL: string;
  readonly VITE_GEO_HOST: string;
  readonly VITE_GEO_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
