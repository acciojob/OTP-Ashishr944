const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((input, index) => {
    input.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");

        if (this.value && index < codes.length - 1) {
            codes[index + 1].focus();
        }
    });

    input.addEventListener("keydown", function (event) {
        if (event.key === "Backspace") {
            if (this.value !== "") {
                this.value = "";
            } else if (index > 0) {
                codes[index - 1].value = "";
                codes[index - 1].focus();
            }
        }
    });
});