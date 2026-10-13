import { defineConfig } from 'astro/config';

export default defineConfig({
  // Pages are emitted as /slug/index.html so links like /empower work on any static host.
  build: { format: 'directory' },
});
