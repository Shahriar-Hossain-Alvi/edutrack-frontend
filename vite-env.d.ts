
// to resolve warning for .env when using import.meta.env
interface ImportMetaEnv {
    VITE_CLOUDINARY_UPLOAD_PRESET: any;
    VITE_CLOUDINARY_CLOUD_NAME: any;
    readonly VITE_API_BASE_URL: string;
    readonly VITE_DUMMY_TEACHER_EMAIL: string;
    readonly VITE_DUMMY_STUDENT_EMAIL: string;
    readonly VITE_DUMMY_USER_PASSWORD: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}