/**
 * Declaration for TypeScript module to handle imports of PNG image files.
 * Ensures that TypeScript understands how to treat imported PNG files.
 */
declare module '*.png' {
  const value: string;
  export default value;
}
