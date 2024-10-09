// src/utils.ts
export function convertStringToHexPadded(str: string): string {
  let hex: string = "";
  for (let i = 0; i < str.length; i++) {
    const hexChar: string = str.charCodeAt(i).toString(16);
    hex += hexChar;
  }
  return hex.padEnd(40, "0").toUpperCase();
}
