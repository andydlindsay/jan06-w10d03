// returning a function

interface MyFn {
  (name: string, age: number): void;
}

const returnFn = (): MyFn => {
  return (name: string, age: number): void => {};
};

const newFn = returnFn();
newFn('hello', 27);
