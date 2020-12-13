export function hectoToKilogram(hectogram) {
  return hectogram / 10;
}
export function decimeterToMeters(decimeter) {
  return decimeter / 10;
}
export function generateKeyProp() {
  return 'poke' + Math.random().toString(36).substr(2, 9);
}
