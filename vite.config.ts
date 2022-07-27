/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  test: {
    exclude: [...configDefaults.exclude, 'packages/template/*', 'tests/*'],
    environment: 'happy-dom',
  },
});
