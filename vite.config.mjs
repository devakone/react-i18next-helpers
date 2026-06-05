import { defineConfig, transformWithOxc } from 'vite';

export default defineConfig({
  plugins: [
    {
      name: 'load-js-files-as-jsx',
      transform(code, id) {
        if (!id.includes('/src/') || !id.endsWith('.js')) {
          return null;
        }

        return transformWithOxc(code, id, {
          lang: 'jsx'
        });
      }
    }
  ],
  test: {
    environment: 'jsdom'
  }
});
