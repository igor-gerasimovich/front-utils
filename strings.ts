import {reqString} from "./types";

export function reqValidString(val: any): string {
	const str = reqString(val);
	if (str.trim() === '') {
		throw new Error(`Expected not empty valid string got (${val})`)
	}

	return str.trim();
}