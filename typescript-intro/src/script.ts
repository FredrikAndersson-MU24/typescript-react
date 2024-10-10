// Interface
interface Animal {
  name: string;
  type: string;
}

const animal: Animal = {
  name: "fredrik",
  type: "fish",
};

// Type
type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "Fredrik",
  age: 38,
};

type User = {
  id: string;
  username: string;
  accessLevel: number;
  creation_date: Date;
  last_login: Date;
  posts: Array<string>;
  data: object;
};

const user: User = {
  id: crypto.randomUUID(),
  username: "fredrik",
  accessLevel: 2,
  creation_date: new Date(),
  last_login: new Date(),
  posts: ["apple", "kiwi", "pear"],
  data: {},
};

console.log(user);
