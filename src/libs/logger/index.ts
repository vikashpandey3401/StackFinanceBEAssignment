export const logger = {
  log(...args: any[]): void {
    // eslint-disable-next-line no-console
    console.log(...args);
  },
  error(...args: any[]): void {
    // eslint-disable-next-line no-console
    console.error(...args);
  },
  info(...args: any[]): void {
    // eslint-disable-next-line no-console
    console.info(...args);
  },
};
