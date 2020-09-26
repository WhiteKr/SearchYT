const { resolve } = require('path');
const request = require('request');


class youtubeAPI {

	// Search only Channels on YouTube
	SearchYoutubeChannel (keyword, count, APIKEY) {
		return new Promise((resolve, reject) => {
			var searchOPT = {
				qs: {
					q: keyword,
					part: "snippet",
					key: APIKEY,
					type: "channel",
					maxResults: count
				},
				uri: "https://www.googleapis.com/youtube/v3/search"
			}
	
			request.get(searchOPT, (err, res, body) => {
				if (err) return resolve({error: err});

				// console.log("========== Channels ==========");
				// console.log(body);
				// console.log("==============================");
	
				let data = JSON.parse(body);
				return resolve(data);
			});
		});
	}

	// Search only Videos on YouTube
	SearchYoutubeVedio (keyword, count, APIKEY) {
		return new Promise((resolve, reject) => {
			var searchOPT = {
				qs: {
					q: keyword,
					part: "snippet",
					key: APIKEY,
					type: "video",
					maxResults: count
				},
				uri: "https://www.googleapis.com/youtube/v3/search"
			}

			request.get(searchOPT, (err, res, body) => {
				if (err) return resolve({error: err});

				// console.log("========== Videos ==========");
				// console.log(body);
				// console.log("============================");

				let data = JSON.parse(body);
				return resolve(data);
			});
		});
	}

	// Search All results on YouTube
	SearchYoutubeAll (keyword, count, APIKEY) {
		return new Promise((resolve, reject) => {
			var searchOPT = {
				qs: {
					q: keyword,
					part: "snippet",
					key: APIKEY,
					type: "channel video",
					maxResults: count
				},
				uri: "https://www.googleapis.com/youtube/v3/search"
			}

			request.get(searchOPT, (err, res, body) => {
				if (err) return resolve({error: err});

				// console.log("========== Channel & Video ==========");
				// console.log(body);
				// console.log("=====================================");

				let data = JSON.parse(body);
				return resolve(data);
			});
		});
	}
}

module.exports = new youtubeAPI();