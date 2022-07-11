window.onload = function () {
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = (Math.random() * 100000) | 0;
        // these IDs from the previous steps
        emailjs.sendForm("hehe", "hehe", this).then(
          function () {
            const form = document.getElementById("contact-form");
            form.reset();
            let SUCCESS = ` <p class="success">vooyah! Your Message has been send</p>`;
            let msg = document.createElement("div");
            msg.innerHTML = SUCCESS;
            form.appendChild(msg);
            setTimeout(() => {
              form.removeChild(msg);
            }, 5000);
            console.log("SUCCESS!");
          },
          function (error) {
            const form = document.getElementById("contact-form");
            let SUCCESS = ` <p class="success">Can't Deliver Your message 🙁</p>
            <a class="error" href="mailto:shahrozekm12345@gmail.com">report</a>`;
            let msg = document.createElement("div");
            msg.innerHTML = SUCCESS;
            form.appendChild(msg);
            setTimeout(() => {
              form.removeChild(msg);
            }, 5000);
            console.log("FAILED...", error);
          }
        );
      });
  };