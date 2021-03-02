import GreenThumb from "./green_thumb";


window.onload = () => {

    let data = {
        _terms: { sun: "", water: "", pets: "" },
        _plants: [],

        updateTerm(key, value) {
            this.terms[key] = value
        },

        isReadyToSubmit() {
            return (!Object.values(this.terms).some(value => { return (value === "") }));
        },

        async search() {
            const URL = "https://front-br-challenges.web.app/api/v2/green-thumb/";

            let params = this.parametrize(this.terms);
            let response = await fetch([URL, params].join("?"));
            this._plants = await response.json();


            document.querySelector("#selection-results").classList.remove("hidden", (this.plants.length > 0));
            const plantsContainer = document.querySelector(".plants__content");

            this._plants.forEach(plant => {
                plantsContainer.innerHTML =
                    `
                    <div class="plant plant--${plant.staff_favorite ? 'favorite' : ''}">
                        <div class="plant__content">
                            <img class="plant__image" src="${plant.url}" />
                            <div class="plant__name">${plant.name}</div>
                            <div class="plant__price">$${plant.price}</div>
                            <div class="plant__icons">
                                ${plant.toxicity ? `<img src="images/icons/toxic" alt="Toxicity Icon">` : ""}
                                <img src="images/icons/sun-${plant.sun}.svg" alt="Sun Icon">
                                <img src="images/icons/water-${plant.water}.svg" alt="Drop Icon">
                                ${plant.pets ? `<img src="images/icons/pets" alt="Pet Icon">` : ""}
                                </div>
                        </div>
                    </div>
                `
            })
        },

        parametrize(terms) {
            return Object.entries(terms).map(entry => entry.join("=")).join("&");
        },


        // GETTERS AND SETTERS

        get terms() {
            return this._terms;
        },

        get plants() {
            return this._plants;
        },


        set terms(terms) {
            this._terms = terms;
        },

        set plants(plants) {
            this._plants = plants
        }
    };


    document.querySelector(".selection-bar__form").addEventListener('change', (e) => {
        let select = e.target;
        data.updateTerm(select.name, select.value)
        if (data.isReadyToSubmit()) {
            data.search()
        }
        return;
    });
}