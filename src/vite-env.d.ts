/// <reference types="vite/client" />
// vite-env.d.ts
interface ImportMeta {
  env: {
    [key: string]: string | boolean | undefined;
    VITE_OPENAI_KEY: string;
    // Add more environment variables here...
  };
}
