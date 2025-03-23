declare global {
    namespace NodeJS {
        interface ProcessEnv {
            FIREBASE_ADMIN_KEY: string;
        }
    }
}

export { };
