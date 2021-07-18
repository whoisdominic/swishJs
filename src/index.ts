export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('\x1b[36m%s\x1b[0m', 'In dev mode'); 
  }
  return a + b;
};
