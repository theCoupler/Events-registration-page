class Form {
    constructor(id) {

        this.myForm = document.getElementById("myForm");
        this.closeButton = document.querySelector(".close");
        this.id = id;
        this.refresh();

    }

    refresh() {

        this.myForm.style.display = "block";
        this.closeButton.addEventListener("click", () => {
            this.myForm.style.display = "none";
        });
        window.onclick = (event) => {
            if (event.target == this.myForm) {
                this.myForm.style.display = "none";
                submitButton.remove();
            }
        };
        // this.submitButton = document.getElementById("submitButton");
        const submitButton = document.createElement('button')
        submitButton.setAttribute('type', 'submit')
        submitButton.textContent = 'Submit'
        this.myForm.querySelector('.wrapper').appendChild(submitButton);
        submitButton.addEventListener("click", (event) => {
            event.preventDefault();
            console.log(this.id)
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
                `https://test-api.codingbootcamp.cz/api/9451fa01/events/${this.id}/registrations`,
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
                    this.myForm.style.display = "none";
                    submitButton.remove();

                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        });
    }
}

export default Form;
