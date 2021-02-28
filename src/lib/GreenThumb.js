const term = "sun=high&water=regularly&pets=false";

const GreenThumb = {
    search(term) {
        fetch(`https://front-br-challenges.web.app/api/v2/green-thumb/?${term}`).then(response => {
            console.log(response)
            return response.json();

        })
    }
}

export default GreenThumb;
