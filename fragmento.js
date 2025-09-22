class BadFilmComponent extends HTMLElement {
    constructor(){
        super();
        let title = "Happy Gilmore 2";
        let img = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2025%2F06%2Fhappy-gilmore-2-film-poster.jpg&f=1&nofb=1&ipt=0637a75baf4b4abee650d628e13c628b606ea7416b6687015720f9b40a267b48"
        this.innerHTML = `
            <h2>${title}<h2>
            <img src="${img}" width="300" height="100">
        `;
    }
}

customElements.define("dalo-12", BadFilmComponent);