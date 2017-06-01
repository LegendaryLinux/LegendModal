import LegendModal from './LegendModal';
import '../css/index.css';

window.onload = () => {
	let modalOne = new LegendModal(document.getElementById('test1-div'));
	document.getElementById('test1').addEventListener('click',modalOne.showModal);

	let modalTwo = new LegendModal(document.getElementById('test2-div'),{
		visibleOverlay: false
	});
	document.getElementById('test2').addEventListener('click',modalTwo.showModal);

	let modalThree = new LegendModal();
	//document.getElementById('close-test3').addEventListener('click',modalThree.closeModal);
	modalThree.setContent(document.getElementById('test3-div'));
	document.getElementById('test3').addEventListener('click',modalThree.showModal);

	let modalFour = new LegendModal(null,{
		closeOnEscape: false,
		closeOnOverlayClick: false
	});
	modalFour.setContent(document.getElementById('test4-div'));
	document.getElementById('test4').addEventListener('click',modalFour.showModal);

	let modalFive = new LegendModal();
	modalFive.setContent(document.getElementById('test5-div'));
	modalFive.setOptions({
		closeOnOverlayClick: true,
		closeOnEscape: false,
		visibleOverlay: true,
		showCloseButton: false
	});
	document.getElementById('test5').addEventListener('click',modalFive.showModal);
};