import '../css/LegendModal.css';

/**
 * A modal class to make life easier for everyone
 */
class LegendModal{
	/**
	 * Constructor for LegendModal
	 * @param content A DOM element to be used as the content for this modal
	 * @param options Options to customize the the modal is displayed and behaves
	 */
	constructor(content,options){
		// Generate an id for this modal and it's overlay
		this.randomInt = Math.floor(Math.random() * (100000 - 1) + 1).toString();
		this.modalId = "legend-modal-content-" + this.randomInt.toString();
		this.overlayId = "legend-modal-overlay-" + this.randomInt.toString();
		this.initialOverflowX = document.body.style.overflowX;
		this.initialOverflowY = document.body.style.overflowY;

		// Manage the content of the modal
		this.modalContent = (typeof(content) === 'undefined' || content === null) ?
			null :
			content.cloneNode(true);

		// Default customization options
		this.options = {
			visibleOverlay: true,
			closeOnOverlayClick: true,
			closeOnEscape: true,
			showCloseButton: true,
		};

		// If an options object is provided and is valid, use these options
		if(typeof(options) !== 'undefined'){
			this._setOptions(options);
		}
	}

	/**
	 * Throw for various errors related to modal validation
	 */
	_validateModal(){
		// If the modal body would be invalid, don't show the modal
		if(this.modalContent === null){
			throw "Specified content for modal body appears invalid.";
		}

		// Only show one modal at a time
		if(document.getElementsByClassName('legend-modal-overlay').length > 0){
			throw "Another LegendModal is currently being displayed!";
		}
	};

	_setOptions = (options) => {
		// If an options object is provided and is valid, use these options
		if(typeof(options) === 'object' && !Array.isArray(options)){
			this.options = Object.assign(this.options,options);
		}else{
			throw "Invalid parameter passed as `option` in LegendModal.";
		}
	};

	/**
	 * Define the content to be used for this modal
	 * @param content A DOM element
	 */
	setContent = (content) => {
		this.modalContent = content.cloneNode(true);
	};

	/**
	 * Update modal display options
	 * @param options An object of options to be updated
	 */
	setOptions = (options) => {
		this._setOptions(options);
	};

	/**
	 * Add the modal and its overlay to the DOM and display them
	 */
	showModal = () => {
		// Make sure the modal will be displayed properly. Throw if it wouldn't.
		this._validateModal();

		// Create the modal overlay and assign style to it
		let overlay = document.createElement("div");
		overlay.id = this.overlayId;
		overlay.classList.add("legend-modal-overlay");

		// Only make the overlay visible if the user hasn't disabled it
		if(this.options.visibleOverlay){
			overlay.style.background = "rgba(0,0,0,0.5)";
		}

		// Set the style on the modal div
		let modalDiv = document.createElement("div");
		modalDiv.id = this.modalId;
		modalDiv.classList.add("legend-modal-base");
		modalDiv.classList.add('legend-modal-open');

		// Append the modal content to the modal
		let content = this.modalContent.cloneNode(true);
		content.style.display = "block";
		modalDiv.appendChild(content);

		// Append the modal to the overlay
		overlay.appendChild(modalDiv);

		// Append the overlay div to the document body
		document.body.appendChild(overlay);

		// If the user wants an overlay click to close the modal, add that listener
		if(this.options.closeOnOverlayClick){
			overlay.addEventListener('click',this.closeModal);

			// Also make sure clicking on the modal itself doesn't close the modal. Fun fact: events bubble up.
			modalDiv.addEventListener('click',function(event){
				event.stopPropagation();
			});
		}

		// If the user wants a close button in the corner of the modal, add that
		if(this.options.showCloseButton){
			// Create the close button
			let closeButton = document.createElement("div");
			closeButton.classList.add('legend-modal-close-button');
			closeButton.innerHTML = "X";

			// Append close button to the modal container and add an event listener
			modalDiv.appendChild(closeButton);
			closeButton.addEventListener('click',this.closeModal);
		}

		// If the user wants the Escape button to close the modal, add that listener here
		if(this.options.closeOnEscape){
			document.body.addEventListener('keydown',this.handleEscapeKey);
		}

		// Center the modal on the screen
		modalDiv.style.left = "calc(50% - " + (modalDiv.offsetWidth/2).toString() + "px)";

		// Add an event listener which closes the modal to all DOM elements with class legend-modal-close
		let closeButtons = document.getElementById(this.overlayId).querySelectorAll('.legend-modal-close');
		closeButtons.forEach((node) => {
			node.addEventListener('click',this.closeModal);
		});

		// Disable scrolling
		document.body.style.overflowY = "hidden";
		document.body.style.overflowX = "hidden";
	};

	/**
	 * Conditionally close the modal if the appropriate listener is active
	 * @param event Event fired from the DOM
	 */
	handleEscapeKey = (event) => {
		// If the key pressed wasn't the escape button, do nothing
		if(typeof(event.key) === 'string' && event.key !== 'Escape') return;
		this.closeModal();
	};

	/**
	 * Close the modal
	 */
	closeModal = () => {
		let overlay = document.getElementById(this.overlayId);
		document.body.removeEventListener('keydown',this.handleEscapeKey);
        overlay.parentNode.removeChild(overlay);

        // Re-enable scrolling
        document.body.style.overflowX = this.initialOverflowX;
        document.body.style.overflowY = this.initialOverflowY;
	};
}

export default LegendModal;