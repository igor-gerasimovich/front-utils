import {isBoolean, isNumber, isString} from "./types";

export function parseBool(val: any): boolean | undefined {
  if (!isBoolean(val) && !isString(val) && isNumber(val)) {
    return
  }

  if (isBoolean(val)) return val;
  if (val === '1' || val === 1 || val === 'true' || val === 't') return true;
  if (val === '0' || val === 0 || val === 'false' || val === 'f') return false;
  return;
}

export function reqParseBool(val: any): boolean {
  const parsed = parseBool(val);
  if (parsed === undefined) throw new Error('Boolean must be passed');
  return parsed;
}