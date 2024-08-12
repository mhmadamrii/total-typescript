import {sum} from "../src";
import {describe, test, expect} from "@jest/globals";
import {getName, getUserId} from "../src/total-typescript";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

describe("Sum function", () => {
  test("It should returns correct value", () => {
    expect(sum(2, 3)).toEqual(5);
  });
});

describe("Optional properties", () => {
  test("It should run properly", () => {
    expect(getName({first: "Matt", last: "Pocock"})).toEqual("Matt, Pocock");
  });

  test("It should run properly", () => {
    expect(getName({first: "Matt"})).toEqual("Matt");
  });
});

describe("Assgin types to variable", () => {
  const defaultUser: User = {
    id: 1,
    firstName: "Matt",
    lastName: "Pocock",
    isAdmin: true,
  };

  const defaultUser2 = {
    id: 5,
    firstName: "Matt",
    lastName: "Pocock",
    isAdmin: true,
  } as User;

  expect(getUserId(defaultUser)).toEqual(1);
  expect(getUserId(defaultUser2)).toEqual(5);
});
