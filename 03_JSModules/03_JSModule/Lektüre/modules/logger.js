console.log("Das Modul 'logger.js' wurde geladen!");
import { test1, test3 } from "./utils.js";

test1();
test3();

export const log = (msg) => {
  console.log(msg);
};

const logDefault = () => {
  console.log("Hallo");
};

export default logDefault;
