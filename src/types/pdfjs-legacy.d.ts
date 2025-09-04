// types/pdfjs-legacy.d.ts
declare module 'pdfjs-dist/legacy/build/pdf' {
  export interface PDFDocumentProxy {
    numPages: number;
    getPage(pageNumber: number): Promise<PDFPageProxy>;
  }

  export interface PDFPageProxy {
    getViewport(params: { scale: number }): PageViewport;
    render(params: RenderParameters): RenderTask;
  }

  export interface PageViewport {
    width: number;
    height: number;
  }

  export interface RenderParameters {
    canvasContext: CanvasRenderingContext2D;
    viewport: PageViewport;

    canvas?: HTMLCanvasElement;
  }

  export interface RenderTask {
    promise: Promise<void>;
  }

  export const GlobalWorkerOptions: {
    workerSrc: string;
  };

  export function getDocument(src: string | Uint8Array | ArrayBuffer): {
    promise: Promise<PDFDocumentProxy>;
  };
}
