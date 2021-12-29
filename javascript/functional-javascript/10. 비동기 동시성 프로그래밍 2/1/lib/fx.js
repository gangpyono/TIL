const log = console.log;

const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const isIterable = a => a && a[Symbol.iterator];

const go1 = (a, f) => a instanceof Promise ? a.then(f) : f(a);

const reduceF = (acc, a, f) =>
  a instanceof Promise ?
  // then의 두번쨰인자로 reject를 전달할 수 있다.
    a.then(a => f(acc, a), e => e == nop ? acc : Promise.reject(e)) :
    f(acc, a);

const head = iter => go1(take(1, iter), ([h]) => h);

const reduce = curry((f, acc, iter) => {
  if (!iter) return reduce(f, head(iter = acc[Symbol.iterator]()), iter);

  iter = iter[Symbol.iterator]();
  return go1(acc, function recur(acc) {
    let cur;
    while (!(cur = iter.next()).done) {
      acc = reduceF(acc, cur.value, f);
      if (acc instanceof Promise) return acc.then(recur);
    }
    return acc;
  });
});

const go = (...args) => reduce((a, f) => f(a), args);

const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

const take = curry((l, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();
  // 재귀를 하려는곳을 유명함수의 즉시실행함수로 묶어준다.
  // let cur;
  // while (!(cur = iter.next()).done) {
  //   const a = cur.value;
  //   res.push(a);
  //   if (res.length == l) return res;
  // }
  // return res;
  return function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      if (a instanceof Promise) {
        return a
          .then(a => (res.push(a), res).length == l ? res : recur())
          // nop일경우 push를하지않고 다음인자로 넘긴다.
          .catch(e => e == nop ? recur() : Promise.reject(e));
      }
      res.push(a);
      if (res.length == l) return res;
    }
    return res;
  }();
});

const takeAll = take(Infinity);

const L = {};

L.range = function* (l) {
  let i = -1;
  while (++i < l) yield i;
};

L.map = curry(function* (f, iter) {
  for (const a of iter) {
    // go1을 사용함으로써 비동기처리를 해줄수있다.
    //yield f(a);
    yield go1(a, f);
  }
});

const nop = Symbol('nop');


// 기존 filter 
// L.filter = curry(function* (f, iter) {
//   for (const a of iter) {
    // f함수에 전달될떄 프로미스를 해결하고 전달해야한다.
//     if (f(a)) yield a;
//   }
// });

L.filter = curry(function* (f, iter) {
  for (const a of iter) {
    const b = go1(a, f);
    //reject를 해줌으로써 다음함수로 전달되지않는다.
    // reject에 인자로 값을 전달해주지 않으면 다음함수로 넘어가는걸 원하지않는 상황인지, 또다른 에러가 발생한지 알 수 없음으로, symbol설정.
    // 이후 take에서 catch로 == nop인 경우를 핸들링.
    if (b instanceof Promise) yield b.then(b => b ? a : Promise.reject(nop)); 
    else if (b) yield a;
  }
});

L.entries = function* (obj) {
  for (const k in obj) yield [k, obj[k]];
};

L.flatten = function* (iter) {
  for (const a of iter) {
    if (isIterable(a)) yield* a;
    else yield a;
  }
};

L.deepFlat = function* f(iter) {
  for (const a of iter) {
    if (isIterable(a)) yield* f(a);
    else yield a;
  }
};

L.flatMap = curry(pipe(L.map, L.flatten));

const map = curry(pipe(L.map, takeAll));

const filter = curry(pipe(L.filter, takeAll));

const find = curry((f, iter) => go(
  iter,
  L.filter(f),
  take(1),
  ([a]) => a));

const flatten = pipe(L.flatten, takeAll);

const flatMap = curry(pipe(L.map, flatten));

var add = (a, b) => a + b;

const range = l => {
  let i = -1;
  let res = [];
  while (++i < l) {
    res.push(i);
  }
  return res;
};
