import Form from "./Newform";

class FeatureEvent {
    constructor(id, name, date, description, imageUrl) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.description = description;
        this.imageUrl = imageUrl;
        this.element = document.createElement("div");
        this.element.className = "top-container";
        this.refreshElement();
    }
    refreshElement = () => {
        this.element.innerHTML = `
            <div class="top-container__header">
                <h2 class="header__heading">FEATURED EVENT</h2>
            </div>
            <div class="top-container__image-container">
                <img
                    src=${this.imageUrl}
                    alt="event image"
                    class="top-container__img"
                />
            </div>
            <div class="top-container__event">
                <h2 class="top-container__heading">${this.name}</h2>
                <p class="top-container__description">${this.description}</p>
            </div>
            <div class="top-container__register">
            </div>
        `;
        this.element
            .querySelector(".top-container__register")
            .appendChild(
                this.createButton(
                    `${this.id}_button`,
                    "top-container__button button"
                )
            );
    };
    createButton = (id, className) => {
        const btn = document.createElement("button");
        btn.className = className;
        btn.id = id;
        btn.innerHTML = "Register";
        btn.addEventListener("click", () => {
            // createForm(this.id);
            let form = new Form(this.id);
        });
        return btn;
    };
}
export { FeatureEvent };