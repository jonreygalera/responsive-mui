const env = (key, defaultValue = null) => {
  return import.meta.env[`VITE_${key}`] ?? defaultValue;
}
export default env;