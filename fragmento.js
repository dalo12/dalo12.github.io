class BadFilmComponent extends HTMLElement {
    constructor(){
        super();
        let title = "Happy Gilmore 2";
        let img = "https://www.imdb.com/es/title/tt31868189/mediaviewer/rm1674557698/?ref_=tt_ov_i"
        this.innerHTML = `
            <h2>${title}<h2>
            <img src="${img}" width="100" height="300">
        `;
    }
}

customElements.define("dalo-12", BadFilmComponent);