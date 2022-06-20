const reqValidString(val: any): string {
	if (typeof val !== 'string') {
		throw new Error(`Value is not valid string got ${typeof val}`);
	}

	if (val.trim() === '') {
		throw new Error(`Expected not empty valid string got (${val})`)
	}

	return val.trim();
}