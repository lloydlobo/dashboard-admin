import { describe, expect, it } from 'vitest';

import { arraySettings, arrayLinks } from './links';

function appendDivIdApp() {
  const div = document.createElement('div');
  div.setAttribute('id', 'app');
  document.body.appendChild(div);
}

// function createApp() {
//   appendDivIdApp();
//   return new App({
//     target: document.getElementById('app'),
//   });
// }

describe('arrayLinks should work', () => {
  // @vitest-environment happy-dom
  it('arrayLinks is defined', () => {
    const links = arrayLinks;
    expect(links).toBeDefined();
  });

  it('arrayLinks length is 6', () => {
    expect(arrayLinks.length).toBe(6);
  });
});
