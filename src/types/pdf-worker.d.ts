// types/pdfjs-dist.d.ts
import type { PDFDocumentProxy } from "pdfjs-dist/types/src/display/api";

declare module "pdfjs-dist/legacy/build/pdf" {
    export function getDocument(
        src: string | Uint8Array | ArrayBuffer
    ): { promise: Promise<PDFDocumentProxy> };
    export const GlobalWorkerOptions: {
        workerSrc: string;
    };
}