class broadcastManager {
	constructor() {
		this._subscribeMap = {};
	}

	// 订阅
	subscribe(type, cb) {
		if (this._subscribeMap[type]) {
			if (!this._subscribeMap[type].includes(cb)) {
				this._subscribeMap[type].push(cb);
			}
		} else {
			this._subscribeMap[type] = [cb];
		}
	}
	// 取消订阅
	unsubscribe(type, cb) {
		if (!this._subscribeMap[type] || !this._subscribeMap[type].includes(cb)) {
			return;
		}
		const idx = this._subscribeMap[type].indexOf(cb);
		this._subscribeMap[type].splice(idx, 1);
	}
	// 发布
	publish(type, ...payload) {
		if (!this._subscribeMap[type]) {
			return;
		}
		this._subscribeMap[type].forEach((cb) => cb(...payload));
	}
}

export default new broadcastManager();
