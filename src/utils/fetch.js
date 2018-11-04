export function fetchData(callback) {
	fetch('https://raw.githubusercontent.com/sixelasacul/lithoprojets/master/data/projects.json')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			callback(data);
		});
}

export function returnFetchData() {
	return fetch('https://raw.githubusercontent.com/sixelasacul/lithoprojets/master/data/projects.json')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return data;
		});
}

export function returnPromiseFetchData() {
	return fetch('https://raw.githubusercontent.com/sixelasacul/lithoprojets/master/data/projects.json');
}

export function fetchAndFindByCode(code, callback) {
	fetchData((data) => {
		data.some((d => {
			if (d.code === code) {
				callback(undefined, d);
				return true;
			}
			callback("Nothing found with this code: " + code);
			return false;
		}));
	});
}