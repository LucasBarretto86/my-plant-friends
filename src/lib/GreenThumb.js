const GreenThumb = {
    findMyGreenFriend(term) {
        fetch(`https://front-br-challenges.web.app/api/v2/green-thumb/?${term}`).then(response => {
            return response.json();

        }).then(responseJSON => {
            return responseJSON;
        })
    }
}

export default GreenThumb;
