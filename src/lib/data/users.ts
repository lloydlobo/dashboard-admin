/* eslint-disable import/prefer-default-export */
type UserType = {
  username: string;
  name: {
    FIRST_NAME: string;
    MIDDLE_NAME: string;
    LAST_NAME: string;
  };
  avatar: string;
};

export const queryUser: UserType = {
  username: 'morgan',
  name: {
    FIRST_NAME: 'Morgan',
    MIDDLE_NAME: '',
    LAST_NAME: 'Oakley',
  },
  avatar: `<svg
      stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-4 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM7.527 17h8.946a4.5 4.5 0 0 0-8.946 0z"></path></g></svg>`,
};
