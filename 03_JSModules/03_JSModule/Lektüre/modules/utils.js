const test1 = () => {
  console.log("Test");
};

const test2 = () => {
  console.log("Test");
};

const test3 = () => {
  test4();
};

const test4 = () => {
  console.log("Test");
};

export { test1, test2, test3 };
