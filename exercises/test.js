let num = 0;
let dep = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log((num += 1));
      resolve();
    }, 1000);
  });
};
async function test() {
  for (let i = 0; i < 10; i++) {
    await dep();
  }
}

test();
