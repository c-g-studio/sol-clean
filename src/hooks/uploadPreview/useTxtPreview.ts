import { useEffect, useState } from 'react';

export const useTxtPreview = (file: File | null, maxLines: number = 10) => {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!file || !file.type.startsWith('text/')) {
      setPreview(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      const lines = text.split('\n').slice(0, maxLines).join('\n');
      setPreview(lines);
    };

    reader.readAsText(file);

    return () => {
      setPreview(null);
    };
  }, [file, maxLines]);

  return preview;
};
