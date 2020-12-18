function hectoToKilogram(hectogram) {
  return hectogram / 10;
}
function decimeterToMeters(decimeter) {
  return decimeter / 10;
}
function generateKeyProp() {
  return 'poke' + Math.random().toString(36).substr(2, 9);
}

module.exports = {
  hectoToKilogram,
  decimeterToMeters,
  generateKeyProp,
};
