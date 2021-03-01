const GreenThumb = {
    findMyGreenFriend(terms) {
        fetch(`https://front-br-challenges.web.app/api/v2/green-thumb/?${terms}`).then(response => {

            return response.json();

        }).then(JSONresponse => {

            try {
                if (JSONresponse == 403 || JSONresponse == 404) {
                    return [];
                } else {
                    console.log(JSONresponse)
                    return JSONresponse;
                }
            } catch (e) {
                alert("Something went really wrong dude (X.X)!");
            }
        })
    }
}

export default GreenThumb;
