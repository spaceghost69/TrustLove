
  declare module 'load-bmfont' {
    export default function loadFont(
      fontUrl: string,
      callback: (err: any, font: any) => void
    ): void;
  }