import _ from 'lodash';

function hectoToKilogram(hectogram) {
  return hectogram / 10;
}
function decimeterToMeters(decimeter) {
  return decimeter / 10;
}
function generateKeyProp() {
  return 'poke' + Math.random().toString(36).substr(2, 9);
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function compactArray(array) {
  let newArray = _.compact(array);
  return newArray;
}
// TODO: global fetch function v1.0.1
// const fetchData = async (url, query) => {
//   const result = await fetch(
//     `${url}/${query}/`
//   ).then((res) => res.json());
//
// };

export {
  hectoToKilogram,
  decimeterToMeters,
  generateKeyProp,
  getRandomInt,
  compactArray,
};
