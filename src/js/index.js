import LegendModal from './LegendModal';

window.onload = () => {
    let modalContent = document.getElementById('my-modal-content');
    let testModal = new LegendModal(modalContent);
    testModal.showModal();
};