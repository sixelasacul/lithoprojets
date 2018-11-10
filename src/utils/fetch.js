export function fetchData(callback, source) {
	fetch(source)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			callback(data);
		});
}

export function returnFetchData(source) {
	return fetch(source)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return data;
		});
}

export function returnPromiseFetchData(source) {
	return fetch(source);
}

export function fetchAndFindByCode(code, callback, source) {
	fetchData((data) => {
		data.some((d => {
			if (d.code === code) {
				callback(undefined, d);
				return true;
			}
			callback("Nothing found with this code: " + code);
			return false;
		}));
	}, source);
}