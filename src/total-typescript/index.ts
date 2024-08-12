// optional property problem
export const getName = (params: {first: string; last?: string}) => {
  if (params.last) {
    return `${params.first}, ${params.last}`;
  }

  return `${params.first}`;
};

// assing types to variable
interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

export const getUserId = (user: User) => {
  return user.id;
};

// union problems
interface User2 {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  /**
   * How do we ensure role is one of
   * 'admin', 'user', 'super-admin'
   */
  role: "admin" | "user" | "super-admin";
}

export const user2: User2 = {
  id: 4,
  firstName: "Matt",
  lastName: "Pocock",
  isAdmin: false,
  // @ts-expect-error
  role: "It_SHOULD_NOT_BE_ALLOWED",
};

export const str = "This is a string" as string;

const expectStr = (param: number) => {
  return param;
};

expectStr(12);

// array problem
interface Developer {
  id: number;
  name: string;
  isNerd: boolean;
  posts: IPosts[];
  second_posts: Array<IPosts>;
}

interface IPosts {
  id: string;
  title: string;
}

const dev: Developer = {
  id: 1,
  name: "John",
  isNerd: true,
  posts: [
    {
      id: "1",
      title: "something",
    },
  ],
  second_posts: [
    {
      id: "2",
      title: "second something",
    },
  ],
};
console.log("dev", dev);
