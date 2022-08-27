import * as url from "./url";
import * as broadcastManager from "./broadcast";
import a from "./throttle";

export function add(a, b) {
	return a + b;
}

export default {
	add,
	url,
	broadcastManager,
	...a
};
