// import { createForm } from "./form.js";
// import Form from "./Newform.js";

// class Event {
//     constructor(id, name, date, description, imageUrl) {
//         this.id = id;
//         this.name = name;
//         this.date = date;
//         this.description = description;
//         this.imageUrl = imageUrl;
//         this.element = document.createElement("div");
//         this.element.className = "top-container";

//         this.refreshElement();
//     }

//     refreshElement = () => {
//         this.element.innerHTML = `
//             <div class="top-container__header">
//                 <h2 class="header__heading">FEATURED EVENT</h2>
//             </div>
//             <div class="top-container__image-container">
//                 <img
//                     src=${this.imageUrl}
//                     alt="event image"
//                     class="top-container__img"
//                     width="200px"
//                     height="200px"
//                 />
//             </div>
//             <div class="top-container__event">
//                 <h2 class="top-container__heading">${this.name}</h2>
//                 <p class="top-container__description">${this.description}</p>
//             </div>
//             <div class="top-container__register">
//             </div>
//         `;
//         this.element
//             .querySelector(".top-container__register")
//             .appendChild(
//                 this.createButton(
//                     `${this.id}_button`,
//                     "top-container__button button"
//                 )
//             );
//     };

//     createButton = (id, className) => {
//         const btn = document.createElement("button");
//         btn.className = className;
//         btn.id = id;
//         btn.innerHTML = "Register";

//         btn.addEventListener("click", () => {
//             let form = new Form(this.id);

//         });

//         return btn;
//     };
// }

// export { Event };
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