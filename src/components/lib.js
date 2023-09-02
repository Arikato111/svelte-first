export function decryptText(text) {
  let textConvert = "";
  for (let i = 0; i < text.length; i++) {
    textConvert = textConvert + String.fromCharCode(text.charCodeAt(i) - 1);
  }
  return textConvert;
}
