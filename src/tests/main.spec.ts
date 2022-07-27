import { describe, expect, it } from 'vitest';
import App from '../App.svelte';

function appendDivIdApp() {
  const div = document.createElement('div');
  div.setAttribute('id', 'app');
  document.body.appendChild(div);
}

function createApp() {
  appendDivIdApp();
  return new App({
    target: document.getElementById('app'),
  });
}

describe('should work', () => {
  it('should work', () => {
    expect(true).toBeTruthy();
  });
});

describe('app should work', () => {
  // @vitest-environment happy-dom
  it('should work', () => {
    const app = createApp();
    expect(app).toBeDefined();
  });
});
