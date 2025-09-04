import { useEffect, useState } from "react";

export const usePdfPreview = (file: File | null) => {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!file) return;
    if (file.type !== "application/pdf") return;

    let cancelled = false;

    const loadPdf = async () => {
      // Динамічний імпорт тільки на клієнті
      const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf");
      const { getDocument } = pdfjsLib;

      // Встановлюємо worker з public
      pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf/pdf.worker.min.mjs";

      const reader = new FileReader();
      reader.onload = async () => {
        if (cancelled) return;

        const typedArray = new Uint8Array(reader.result as ArrayBuffer);
        const pdf = await getDocument(typedArray).promise;
        const page = await pdf.getPage(1);

        const viewport = page.getViewport({ scale: 1 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d")!;

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: context, viewport }).promise;

        if (!cancelled) {
          setPreview(canvas.toDataURL());
        }
      };

      reader.readAsArrayBuffer(file);
    };

    loadPdf();

    return () => {
      cancelled = true; // щоб скасувати, якщо файл змінився до завершення
    };
  }, [file]);

  return preview;
};
