document.addEventListener('DOMContentLoaded', function () {
    const modals = ['data-locations-modal', 'data-howmade-modal', 'data-buynow-modal'];

    modals.forEach(element => {
        const openModalSelector = element + "-open";
        const closeModalSelector = element + "-close";

        const openModalBtn = document.querySelector("[" + openModalSelector + "]");
        const closeModalBtn = document.querySelector("[" + closeModalSelector + "]");
        const modal = document.querySelector("[" + element + "]");

        if (!modal) logModalError("Can`t find Modal with attribute " + modal);
        if (!openModalBtn) logModalError("Can`t find Open modal button with attribute " + openModalSelector);
        if (!closeModalBtn) logModalError("Can`t find Close modal button with attribute " + closeModalSelector);
        if (!modal || !openModalBtn || !closeModalBtn) return;

        openModalBtn.addEventListener("click", toggleModal);
        closeModalBtn.addEventListener("click", toggleModal);

        function toggleModal() {
            document.body.classList.toggle("modal-open")
            modal.classList.toggle("is-hidden");
        }
    });
}, false);

function logModalError(text){
    const styles = "color: #bada55";
    console.log("%c" + text, styles);
}