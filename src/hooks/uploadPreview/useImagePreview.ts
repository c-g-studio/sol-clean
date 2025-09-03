import { useEffect, useState } from "react";

export const useImagePreview = (file: File | null) => {
    const [preview, setPreview] = useState<string | null>(null);

    useEffect(() => {
        if (!file || !file.type.startsWith("image/")) {
            setPreview(null);
            return;
        }

        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);

        return () => {
            URL.revokeObjectURL(objectUrl);
            setPreview(null);
        };
    }, [file]);

    return preview;
};
