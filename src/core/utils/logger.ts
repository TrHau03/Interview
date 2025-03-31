export const logger = {
  info: (title: string, message: string) => {
    console.dir(`${title}: ${message}`);
  },
  error: (title: string, message: string) => {
    console.error(`${title}: ${message}`);
  },
};
