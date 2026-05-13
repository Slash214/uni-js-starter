/**
 * @template T
 * @param {UniApp.RequestOptions} options
 * @returns {Promise<T>}
 */
export function request(options) {
	return new Promise((resolve, reject) => {
		uni.request({
			...options,
			success: (res) => {
				const code = res.statusCode;
				const ok = typeof code === "number" && code >= 200 && code < 300;
				if (ok) {
					resolve(res.data);
				} else {
					reject(new Error(`HTTP ${code ?? "unknown"}`));
				}
			},
			fail: (err) => reject(err),
		});
	});
}
