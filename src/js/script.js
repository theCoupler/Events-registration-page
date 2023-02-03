// import { Event } from "./event";
// import { getData } from "./api";

// const init = async () => {
//     const data = await getData()
//     const firstEvent = data[1]
//     const event = new Event(
//         firstEvent.id,
//         firstEvent.name,
//         firstEvent.date,
//         firstEvent.description,
//         firstEvent.image_url
//     );
//     document.querySelector(".top").appendChild(event.element);

// }

// init()

import { Event } from "./Event";
import { getData } from "./api";
const init = async () => {
    const data = await getData();
    data.forEach((event) => {
        console.log(data);
        const newEvent = new Event(
            event.id,
            event.name,
            event.date,
            event.description,
            event.image_url
        );
        document
            .querySelector(".widgets-container")
            .appendChild(newEvent.element);
    });
};
init();