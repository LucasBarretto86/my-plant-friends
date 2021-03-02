

const data =
{
    _terms: { sun: "", water: "", pets: "" },

    get terms() {
        return this._terms;
    },

    updateTerm(key, value) {
        this.terms[key] = value
    },

    isReadyToSubmit() {
        this.terms.some(term => { term == "" })
    }
};

window.onload = () => {
    document.querySelector(".selection-bar__form").addEventListener('change', (e) => {
        let select = e.target;

        data.updateTerm(select.name, select.value);
    });
}