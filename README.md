# LegendModal
#### An ES6 modal class designed to make your life easier.

##### Features:
* Modal fades in and out using fancy CSS transitions
* Automatically disables page scrolling while modal is open
* Ridiculously simple to use

## Getting Started:

#### Begin with a basic HTML file.
Your modal content can contained within DOM elements on the page or provided by a React.Component.
*LegendModal* isn't picky.
```html
<!DOCTYPE HTML>
<html>
<head>
    <title>Legend Modal Test Page</title>
    <meta charset="UTF-8">
    <script type="application/ecmascript" src="src/js/index.js"></script>
</head>
<body>
    <div id="content-main">
        <h2>Modal test!</h2>
        <button id="test1">Basic Usage</button><br/>
        <button id="test2">Invisible Overlay</button><br/>
        <button id="test3">Limited Close Options</button>
        
        <div id="test1-div" style="display:none">
            I'm just a bunch of text! You can close this modal by pressing escape, clicking
            the overlay, or clicking the X button in the upper right.
        </div>
        
        <div id="test2-div" style="display:none">
            This modal can be closed the same as the others, but the overlay behind it 
            is invisible!
        </div>
                
        <div id="test3-div" style="display:none">
            This modal can be closed by pressing the button!<br/>
            <button class="legend-modal-close">Close me!</button>
        </div>
        
        <div id="test4-div" style="display:none">
            This modal can be closed only by pressing the X in the upper right corner!
        </div>
        
        <div id="test5-div" style="display:none">
            Options for this modal were set using <em>setOptions</em>.
        </div>
    </div>
</body>
</html>
```

## Basic Usage

#### Constructor:
The constructor for LegendModal takes two optional arguments:  
`new LegendModal(content,options)`

* `content`: A DOM element to be used as the content of the modal. The `display` property 
    of `content` will be overwritten with `block` before it is displayed to the user.
    
* `options`: An object containing up to four boolean options which control how the modal 
    will behave:
    
    * `visibleOverlay`: If false, the overlay behind the modal will not be visible to the user, 
        though it will still be present. Defaults to true.
        
    * `closeOnOverlayClick`: If false, the modal will not close if the user clicks outside
        of the modal. Defaults to true.
        
    * `closeOnEscape`: If false, pressing the Escape key will not close the modal. This option
        is always false on Internet Explorer and Edge. Defaults to true.
        
    * `showCloseButton`: If true, an `X` will be shown in the upper-right corner of the modal.
        Clicking this `X` will close the modal. Defaults to true.
        
#### Methods:

* `setContent(content)`: Define the content of the modal.
    * `content`: A DOM element to be used as the new content.
    
* `setoptions(options)`: Set or alter modal options.
    * `options`: An object containing any of the options described above.
    
* `showModal()`: Create a copy of `content` and display a modal containing it.

* `closeModal()`: Close the modal and remove it from the DOM.

*Note: `closeModal` is invoked automatically when a click event is fired on a 
DOM element with the class `legend-modal-close` if that DOM element is present
in the modal body.

## Code Examples

**Import the class:**  
```ecmascript 6
import LegendModal from './LegendModal';
```

**To create and display a simple modal:**
```ecmascript 6
let modalOne = new LegendModal(document.getElementById('test1-div'));
modalOne.showModal();
```

**Modal with an invisible overlay:**
```ecmascript 6
let modalTwo = new LegendModal(document.getElementById('test2-div'),{
    visibleOverlay: false
});
```

**Manually close the modal:**
```ecmascript 6
let modalThree = new LegendModal(document.getElementById('test3-modal'));
setTimeout(() => {
	modalThree.closeModal();
}, 5000);
```

**Specifying a DOM element to close the modal:**
```html
<button class="legend-modal-close">Close Modal</button>
```

**Define options before modal content:**
```ecmascript 6
let modalFour = new LegendModal(null,{
    closeOnEscape: false,
    closeOnOverlayClick: false
});
modalFour.setContent(document.getElementById('test4-div'));
```

**Alter options after modal instantiation:**
```ecmascript 6
let modalFive = new LegendModal();
modalFive.setContent(document.getElementById('test5-div'));
modalFive.setOptions({
    closeOnOverlayClick: true,
    closeOnEscape: false,
    visibleOverlay: true,
    showCloseButton: false
});
```
