export const parseUrlParam = function (url, param) {
	const searchIndex = url.indexOf("?");
	const hashIndex = url.indexOf("#");
	if (hashIndex > -1) {
		url = url.substr(0, hashIndex);
	}
	const searchParams = url.slice(searchIndex + 1).split("&");
	for (let i = 0; i < searchParams.length; i += 1) {
		const items = searchParams[i].split("=");
		if (items[0].trim().toLowerCase() === param.toLowerCase()) {
			const tmp = searchParams[i];
			return tmp.substr(tmp.indexOf("=") + 1);
		}
	}
	return null;
};

export const test = "hello,world";

export default {
	test,
	parseUrlParam,
};
