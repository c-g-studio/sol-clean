import { usePdfPreview } from './usePdfPreview';
import { useTxtPreview } from './useTxtPreview';
import { useImagePreview } from './useImagePreview';

export type FilePreviewResult =
  | { type: 'pdf'; preview: string | null }
  | { type: 'txt'; preview: string | null }
  | { type: 'image'; preview: string | null }
  | { type: 'docx'; preview: null }
  | { type: 'other'; preview: null };

export const useFilePreview = (file: File | null): FilePreviewResult => {
  const pdfPreview = usePdfPreview(file);
  const txtPreview = useTxtPreview(file);
  const imagePreview = useImagePreview(file);

  if (!file) return { type: 'other', preview: null };

  if (file.type === 'application/pdf') {
    return { type: 'pdf', preview: pdfPreview };
  }

  if (file.type.startsWith('text/')) {
    return { type: 'txt', preview: txtPreview };
  }

  if (file.type.startsWith('image/')) {
    return { type: 'image', preview: imagePreview };
  }

  if (
    file.type ===
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
    file.type === 'application/msword'
  ) {
    return { type: 'docx', preview: null };
  }

  return { type: 'other', preview: null };
};
