export function tagTester(name) {
	let tag = `[object ${name}]`;
	return function (obj) {
		return Object.prototype.toString.call(obj) === tag;
	};
}

export function isArray() {
	return Array.isArray || tagTester("Array");
}

export function isArrayBuffer() {
	return tagTester("ArrayBuffer");
}

export function isBoolean() {
	return tagTester("Boolean");
}

export function isDataView() {
	return tagTester("DataView");
}

export default {
	isArray,
	isArrayBuffer,
	isDataView,
};
