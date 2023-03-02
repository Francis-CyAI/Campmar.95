/* Constants and Variables */







/*event listeners and other*/




setTimeout(() => {
	let itemPrompt = prompt('How many demo items would you like us to add?');
	let servicePrompt = prompt('How many demo services would you like us to add?');
	initiateRender(itemPrompt, servicePrompt);
}, 1000);


document.getElementById('logBtn').addEventListener('click', () => {
	window.open("user.html", "_self");

});


document.getElementById('menuBtn').addEventListener('click', () => {
	if (menuClosed == true)  {
		 tranformMenuIcon();
		 loadMiniCover();
		 openMenu();
		 menuClosed = false;
	} else if (menuClosed == false) {
		 closeMiniMenu();
		 closeMenu();
		 closeMiniCover();
		 restoreMenuIcon();
		 menuClosed = true;
	} 
 });


document.getElementById('closeMiniMenuBtn').addEventListener('click', () => {
	closeMiniMenu();
})





/* Functions */

async function initiateRender(numberOfItems, numberOfServices) {
	await new Promise(r => renderItemsAndServices(numberOfItems, numberOfServices))
}

function renderItemsAndServices(numberOfItems, numberOfServices) {

	var leftNumberOfItems = numberOfItems;
	var numberOfDivs = Math.ceil(numberOfItems / 20); 
	let i = 1;
	while (leftNumberOfItems > 0) {
		for (; i <= numberOfDivs; ) {
			populate('container1', 'add', `
			<div id="IRD-${i}" class="itemRowDiv"> 
			</div>
			`);
			if (leftNumberOfItems >= 20) {
				for (let j = 20; j > 0; j--) {
					populate(`IRD-${i}`, 'add', itemHtml);
					leftNumberOfItems--
				}
			} else {
				for (let j = leftNumberOfItems; j > 0; j--) {
					populate(`IRD-${i}`, 'add', itemHtml);
					leftNumberOfItems--
				}
			}
			i++;
		}
	}

	var leftNumberOfServices = numberOfServices;
	var numberOfDivs = Math.ceil(numberOfServices / 10); 
	let k = 1;
	while (leftNumberOfServices > 0) {
		for (; k <= numberOfDivs; ) {
			populate('container2', 'add', `
			<div id="SRD-${k}" class="serviceRowDiv"> 
			</div>
			`);
			if (leftNumberOfServices >= 10) {
				for (let j = 10; j > 0; j--) {
					populate(`SRD-${k}`, 'add', serviceHtml);
					leftNumberOfServices--
				}
			} else {
				for (let j = leftNumberOfServices; j > 0; j--) {
					populate(`SRD-${k}`, 'add', serviceHtml);
					leftNumberOfServices--
				}
			}
			k++;
		}
	}
	setTimeout(() => {
		closeLoader();
	}, 1000);
}


function openSearchResultsWindow() {
	changeWHOZ('searchResultsDH', -1, -1, '1', '5');
}
function closeSearchResultsWindow() {
	populate('searchResultsDiv', 'change', '');
	changeWHOZ('searchResultsDH', -1, -1, '0', '-1');
}


function addSearchResults(numberOfItems) {
	for (var i = 1; i <= numberOfItems; i++) {
		populate('searchResultsDiv', 'add', itemHtml);
	}
}


function showItems() {
	changeWHOZ('container1', '100%', 'auto', '1', '0');
	document.getElementById('itemsBtn').style.textDecoration = "underline";
}
function hideItems() {
	changeWHOZ('container1', '0', '0', '0', '-1');
	document.getElementById('itemsBtn').style.textDecoration = "none";
}

function showServices() {
	changeWHOZ('container2', '100%', 'auto', '1', '0');
	document.getElementById('servicesBtn').style.textDecoration = "underline";
}
function hideServices() {
	hideSVButtonQuick();

	changeWHOZ('container2', '0', '0', '0', '-1');
	document.getElementById('servicesBtn').style.textDecoration = "none";
}
