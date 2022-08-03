/* stylelint-disable CssSyntaxError */
/* eslint-disable no-console */

type ProjectType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

let data: ProjectType[];
// let result: ProjectType[];

export const URL_TODO = `https://jsonplaceholder.typicode.com/todos/1`;

export async function fetchDataTodo(): Promise<ProjectType[]> {
  const results = fetch(URL_TODO)
    .then((response: Response) => response.json())
    .then((json: ProjectType[]) => {
      console.log(json);
      data = json;
      return data;
    })
    .catch((err: string) => {
      throw new Error(err);
    });

  const res = await Promise.resolve(results);

  return res;
  // return Promise.resolve(res);
}

// fetchDataTodo()
//   .then((response) => {
//     result = response;
//     console.log(result);
//   })
//   .catch((err: string) => {
//     throw new Error(err);
//   });

export const projects = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 2,
    id: 2,
    title: 'ctus aut autem',
    completed: true,
  },
  {
    userId: 3,
    id: 3,
    title: 'lorem ipsum dolor aut autem',
    completed: false,
  },
  {
    userId: 4,
    id: 4,
    title: 'ctus  ipsum dolor sit aut aut autem',
    completed: true,
  },
  {
    userId: 5,
    id: 5,
    title: 'lorem Ips delectus aut autem',
    completed: false,
  },
  {
    userId: 6,
    id: 6,
    title: 'ut Dolor sit autem',
    completed: true,
  },
];
// if (!result) throw new Error('result is undefined or empty');

// export const projects: Writable<ProjectType[]> = writable(result);
// const e = projects.subscribe((d) => d);

// console.log(e);
