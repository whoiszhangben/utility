const AjaxGet = function (
	url,
	callback = (res) => {},
	cancelCallback = () => {}
) {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.responseType = "json";
	xhr.onreadystatechange = () => {
		if (xhr.status === 200) {
			if (xhr.readyState === 4) {
				callback(xhr.response);
			} else {
				// other readyState
			}
		} else {
			// other status
		}
	};
	xhr.onerror = () => {
		// request error
	};
	xhr.send(null);
	return xhr;
};

// // 串行调用
// AjaxGet("/api1", res1 => {
// 	AjaxGet("/api2", res2 => {
// 		// ...
// 	})

// 并行调用
let xhr1 = AjaxGet("/api1", )

const AjaxToPromise = function (url) {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.responseType = "json";
		xhr.onreadystatechange = function () {
			if (xhr.status === 200) {
				if (xhr.readyState === 4) {
					resolve(xhr.response);
				} else {
					// reject other readyState
				}
			} else {
				// reject other error
			}
		};
		xhr.send(null);
	});
};
