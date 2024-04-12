const modal = document.querySelector(".modal");
const modalButtons = document.querySelectorAll(".modal-button");

modalButtons.forEach((modalButton) => {
    modalButton.addEventListener("click", () => {
        modal.showModal();
        window.addEventListener("click", outsideClickListener);
    });
});

function outsideClickListener(event) {
    if (event.target === modal) {
      modal.close();
    }
}