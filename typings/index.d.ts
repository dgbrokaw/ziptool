declare module 'ziptool' {
  export type ziptoolCallback = (err: Error) => void;

  export const VERSION: string;

  export function zip(src: string|string, dest: string, callback: ziptoolCallback): void;

  export default {
    VERSION,
    zip
  };
}
