import { useEffect, useState } from "react";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import { getDocument, PDFDocumentProxy, PDFPageProxy } from "pdfjs-dist/legacy/build/pdf";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export const usePdfPreview = (file: File | null) => {
  // вказуємо воркер для pdf.js
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!file) return; // вот эта проверка
    if (file.type !== "application/pdf") return;

    const reader = new FileReader();
    reader.onload = async () => {
      const typedArray = new Uint8Array(reader.result as ArrayBuffer);

      const pdf: PDFDocumentProxy = await getDocument(typedArray).promise;
      const page: PDFPageProxy = await pdf.getPage(1);

      const viewport = page.getViewport({ scale: 1 });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d")!;

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({
        canvasContext: context,
        viewport,
      }).promise;

      setPreview(canvas.toDataURL());
    };

    reader.readAsArrayBuffer(file);
  }, [file]);

  return preview;
};
