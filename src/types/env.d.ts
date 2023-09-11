declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DEEPAI_API_KEY: string;
      NEXT_PUBLIC_URL: string;
    }
  }
}

export {}
