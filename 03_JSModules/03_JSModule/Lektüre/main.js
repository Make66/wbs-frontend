console.log("Das Modul 'main.js' wurde geladen!");

import logDefault1, { log } from "./modules/logger.js";
import logDefault2 from "./modules/logger2.js";
import { count, state, increment } from "./modules/counter.js";
import * as MathTools from "./modules/math.js";
import userData from "./users.json" with {type: "json"}

// import {
//   count,
//   state,
//   increment,
//   log,
//   logDefault1,
//   logDefault2,
// } from "./modules/index.js";

// let localCount = count;

// log("asgsdfds");
// logDefault1();
// logDefault2();

// increment();
// console.log(count);

// // count++;

// state.score++;
// console.log(state);

// console.log(localCount);
// increment();
// console.log(localCount);
// console.log(count);

// console.log(MathTools);

// console.log(MathTools.PI);

console.log(userData);
