/// <reference types="vite/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_UI_TITLE: string;
  readonly VITE_UI_LOGO: string;
  readonly VITE_UI_CHAT_TITLE: string;
  readonly VITE_UI_CHAT_DESCRIPTION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
