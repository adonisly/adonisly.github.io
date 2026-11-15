import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://inklinks.io',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  markdown: { shikiConfig: { theme: 'github-light' } },
});
