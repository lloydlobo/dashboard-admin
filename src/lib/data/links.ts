/* eslint-disable import/prefer-default-export */
export type LinkType = {
  id: number;
  text: string;
  url: string;
  alt: string;
};

export type IconType = {
  id: number;
  svg: string;
  alt: string;
};

export const SVG = {
  id_0: {
    text: `home`,
    svg: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path></svg>`,
  },
  id_1: {
    text: `profile`,
    svg: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-4 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM7.527 17h8.946a4.5 4.5 0 0 0-8.946 0z"></path></g></svg>`,
  },

  id_2: {
    text: `messages`,
    svg: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM7 10v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"></path></g></svg>`,
  },
  id_3: {
    text: `history`,
    svg: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z" clip-rule="evenodd"></path></svg>`,
  },
  id_4: {
    text: `tasks`,
    svg: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M1,3 L23,3 L23,7 L1,7 L1,3 Z M1,10 L23,10 L23,14 L1,14 L1,10 Z M1,17 L23,17 L23,21 L1,21 L1,17 Z M1,4 L16,4 L16,6 L1,6 L1,4 Z M1,11 L6,11 L6,13 L1,13 L1,11 Z M1,18 L11,18 L11,20 L1,20 L1,18 Z"></path></svg>`,
  },
  id_5: {
    text: `communities`,
    svg: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg>`,
  },
};

export const arrayLinks: { icon: IconType; link: LinkType }[] = [
  {
    icon: { id: 0, svg: `${SVG.id_0.svg}`, alt: 'home' } as IconType,
    link: { id: 0, text: 'Home', url: '/', alt: 'Home' } as LinkType,
  },
  {
    icon: { id: 1, svg: `${SVG.id_1.svg}`, alt: 'profile' } as IconType,
    link: {
      id: 1,
      text: 'Profile',
      url: '/profile',
      alt: 'Profile',
    } as LinkType,
  },
  {
    icon: { id: 2, svg: `${SVG.id_2.svg}`, alt: 'messages' } as IconType,
    link: {
      id: 2,
      text: 'Messages',
      url: '/messages',
      alt: 'Messages',
    } as LinkType,
  },
  {
    icon: { id: 3, svg: `${SVG.id_3.svg}`, alt: 'History' } as IconType,
    link: {
      id: 3,
      text: 'History',
      url: '/history',
      alt: 'History',
    } as LinkType,
  },
  {
    icon: { id: 4, svg: `${SVG.id_4.svg}`, alt: 'tasks' } as IconType,
    link: { id: 4, text: 'Tasks', url: '/tasks', alt: 'Tasks' } as LinkType,
  },
  {
    icon: { id: 5, svg: `${SVG.id_5.svg}`, alt: 'communities' } as IconType,
    link: {
      id: 5,
      text: 'Communities',
      url: '/communities' as string,
      alt: 'Communities',
    } as LinkType,
  },
];
