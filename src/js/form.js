const createForm = (id) => {
    const myForm = document.getElementById("myForm");
    const closeButton = document.querySelector(".close");
    myForm.style.display = "block";
    closeButton.addEventListener("click", () => {
        myForm.style.display = "none";
    });
    window.onclick = function (event) {
        if (event.target == myForm) {
            myForm.style.display = "none";
        }
    };
    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        const userName = document.getElementById("name").value;
        const userSurName = document.getElementById("surName").value;
        const userEmail = document.getElementById("email").value;
        const userPhone = document.getElementById("phone").value;
        const userParticipate = document.getElementById("participate").value;
        const data = {
            name: userName,
            surname: userSurName,
            email: userEmail,
            user_phone: userPhone,
            user_participate: userParticipate,
        };
        fetch(
            `https://test-api.codingbootcamp.cz/api/9451fa01/events/${id}/registrations`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
};