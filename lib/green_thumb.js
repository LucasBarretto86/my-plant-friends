import 'regenerator-runtime/runtime'

const GreenThumb = {
    _url: "https://front-br-challenges.web.app/api/v2/green-thumb/",

    async searchForGreenFriends(terms) {
        try {
            const response = await fetch([this._url, terms].join("?"));
            const responseJSON = await response.json();
            return responseJSON;

        } catch (err) {
            console.log(err)
        }
    }
}

export default GreenThumb;
// .then(response => {
//     return response.json()

// }).then(JSON => {
//     return JSON;
// })