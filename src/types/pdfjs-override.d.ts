declare module "pdfjs-dist/legacy/build/pdf" {
    import type { PageViewport } from "pdfjs-dist/types/src/display/display_utils";

    export interface RenderParameters {
        canvasContext: CanvasRenderingContext2D;
        viewport: PageViewport;
        canvas?: HTMLCanvasElement; // робимо опціональним
    }

    export interface PDFPageProxy {
        getViewport(params: { scale: number }): PageViewport;
        render(params: RenderParameters): { promise: Promise<void> };
    }

    export interface PDFDocumentProxy {
        numPages: number;
        getPage(pageNumber: number): Promise<PDFPageProxy>;
    }

    export function getDocument(src: string | Uint8Array | ArrayBuffer): {
        promise: Promise<PDFDocumentProxy>;
    };
}
