console.log("Das Modul 'counter.js' wurde geladen!");

export let count = 0;
export const state = { score: 0 };

export const increment = () => {
  count++;
};
