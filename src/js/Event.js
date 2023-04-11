import { FeatureEvent } from "./FeatureEvent";
class Event {
    constructor(id, name, date, description, imageUrl) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.description = description;
        this.imageUrl = imageUrl;
        this.element = document.createElement("div");
        this.element.className = "widgets-container__widget";
        this.refreshElement();
    }
    refreshElement = () => {
        this.element.innerHTML = `<h2>${this.name}</h2>`;
        console.log(this.element);
        this.element.appendChild(
            this.createButton(`${this.id}_button-more`, "button")
        );
    };
    createButton = (id, className) => {
        const btn = document.createElement("button");
        btn.className = className;
        btn.id = id;
        btn.textContent = "More";
        btn.addEventListener("click", () => {
            const top = document.querySelector(".top");
            top.innerHTML = "";
            top.style.display = "block";
            const event = new FeatureEvent(
                this.id,
                this.name,
                this.date,
                this.description,
                this.imageUrl
            );

            document.querySelector(".top").appendChild(event.element);
        });
        return btn;
    };
}
export { Event };
