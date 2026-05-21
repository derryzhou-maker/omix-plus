/// <reference types="astro/client" />

declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.avif" {
  const value: any;
  export default value;
}

declare module "*.webp" {
  const value: any;
  export default value;
}

declare module "*?url" {
  const value: string;
  export default value;
}
