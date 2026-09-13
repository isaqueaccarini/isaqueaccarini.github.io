const buttons = document.querySelectorAll(".career-button");
const texts = document.querySelectorAll(".career-topic-text");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const career = button.dataset.career;

        texts.forEach(text => {
            text.classList.remove("visible");
        });

        const selectedText = document.querySelector(
            `.career-topic-text[data-career="${career}"]`
        );

        selectedText.classList.add("visible");
    });
});