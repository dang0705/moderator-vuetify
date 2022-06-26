const { MODE } = import.meta.env;
export const isDev = MODE === 'development';
export const isProd = MODE !== 'development';
