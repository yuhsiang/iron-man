const firstPromise = () => new Promise((resolve) => {
  setTimeout(() => {
    console.log('first promise completed');
    resolve();
  }, 300);
});

const secondPromise = () => new Promise((resolve) => {
  setTimeout(() => {
    console.log('second promise completed');
    resolve();
  }, 200);
});

const thirdPromise = () => new Promise((resolve) => {
  setTimeout(() => {
    console.log('3rd promise completed');
    resolve();
  }, 100);
});


// firstPromise()
//   .then(secondPromise)
//   .then(thirdPromise)
//   .then(() => {
//     console.log('done');
//   });

// [firstPromise, secondPromise, thirdPromise].reduce((p, f) => p.then(f), Promise.resolve());
// [firstPromise, secondPromise, thirdPromise, () => { console.log('done'); }].reduce((p, f) => p.then(f), Promise.resolve());

const applyAsync = (acc, val) => acc.then(val);
const composeAsync = (...funcs) => x => funcs.reduce(applyAsync, Promise.resolve(x));

const composed = composeAsync(firstPromise, secondPromise, thirdPromise);
composed().then(() => {
  console.log('done');
});
