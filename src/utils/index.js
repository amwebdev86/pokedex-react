function hectoToKilogram(hectogram) {
  return hectogram / 10;
}
function decimeterToMeters(decimeter) {
  return decimeter / 10;
}
function generateKeyProp() {
  return 'poke' + Math.random().toString(36).substr(2, 9);
}
// TODO: global fetch function v1.0.1
// const fetchData = async (url, query) => {
//   const result = await fetch(
//     `${url}/${query}/`
//   ).then((res) => res.json());
//   setData(result);
//   setLoading(false);
// };

export { hectoToKilogram, decimeterToMeters, generateKeyProp };
