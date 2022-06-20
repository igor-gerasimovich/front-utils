function simpleReqType<T>(v: any, expectedType: string, checkFunc: (v: any) => v is T): T {
  if (!checkFunc(v)) {
    throw new Error(`Expected ${expectedType} got ${typeof v} (${v})`)
  }
  return v;
}

export function isString(v: any): v is string {
  return typeof v === 'string';
}

export function isNumber(v: any): v is number {
  return typeof v === 'number';
}

export function isValidNumber(v: any): v is number {
  return isNumber(v) && !isNaN(v);
}

export function reqString(v: any): string {
  return simpleReqType(v, 'string', isString)
}

export function reqNumber(v: any): number {
  return simpleReqType(v, 'number', isNumber)
}

export function reqValidNumber(v: any): number {
  return simpleReqType(v, 'valid number', isValidNumber)
}

