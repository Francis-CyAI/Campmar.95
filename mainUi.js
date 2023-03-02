
var itemHtml = `
<span class="item">
    <img class="itemImg" />
    <h6 class="minorDets">
        Price | Item Name
    </h6>
    <p class="item-subMinorDets">
        <span><img class="location-icon" src="google_maps_icon.png" /></span> &nbsp; Location
    </p>
    <p class="item-mainDets">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p> 
    <p class="item-contact-btn whatsapp-btn">
		<img class="whatsapp-icon" src="whatsapp.png" /> Whatsapp
	<p>
	<p class="item-contact-btn call-btn">
		<img class="call-icon" src="call_icon.png" /> Call
	</p>  
</span>
`;


var serviceHtml = `
<span id="#" class="link service">
	<img class="serviceImg" />
	<h6 id="#" class="serviceName SD-field">Service Name</h6> 
	<p class="service-locat-info">
	<span><img class="location-icon" src="google_maps_icon.png" /></span> &nbsp; Location
	</p>
	<p class="SD-field  service-dets">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Vulputate sapien nec sagittis aliquam malesuada.
	</p> 
	<p class="service-HT">
		Working Hours
	</p>
	<p class="service-HF">
		Weekdays:  <span class="SD-field SHF-field SHF-B-1">08:00</span> - <span class="SD-field SHF-field">18:00</span>
	</p>
	<p class="service-HF">
		Saturdays:  <span class="SD-field SHF-field SHF-B-2">08:00</span> - <span class="SD-field SHF-field">16:00</span>
	</p>
	<p class="service-HF">
		Sundays:  <span class="SD-field SHF-field SHF-B-3">08:00</span> - <span class="SD-field SHF-field">14:00</span>
	</p>
	<p class="service-HF">
		Holidays:  <span class="SD-field SHF-field SHF-B-4">08:00</span> - <span class="SD-field SHF-field">14:00</span>
	</p>
	<p class="service-contact-btn whatsapp-btn">
		<img class="whatsapp-icon" src="whatsapp.png" /> &nbsp; Whatsapp
	<p>
	<p class="service-contact-btn call-btn">
		<img class="call-icon" src="call_icon.png" /> &nbsp; Call
	</p>
</span>
`;


/*event listeners*/

document.getElementById('logStat').addEventListener('click', () => {
	loadAlert();
	populate('alertMsg', 'change', `You're currently logged out`);
	delayCloseAlert(1500);
});


let demoSearchResultsNumber = 0;

document.getElementById('searchBtn').addEventListener('click', () => {
	if (menuClosed == false) {
		closeMenu();
		restoreMenuIcon();
	}
	demoSearchResultsNumber = prompt('How many demo search results should we add?');
	document.getElementById('resultNumber').innerHTML = `${demoSearchResultsNumber}`;
	openResultBoard();
});

document.getElementById('viewResultBtn').addEventListener('click', () => {

	var number = document.getElementById('resultNumber').textContent;

	if (number <= 0) {

		loadAlert();
		populate('alertMsg', 'change', 'No results found.');
		delayCloseAlert(1000);

		closeResultBoard();
	} else {
		loadCover();
		openLoader();
		setTimeout (() => {
			addSearchResults(demoSearchResultsNumber);
			closeResultBoard();
			openSearchResultsWindow();
			closeLoader();
			closeCover();
		}, 250);
		
	}
	
});

document.getElementById('closeBoardBtn').addEventListener('click', () => {
	closeResultBoard();
});


document.getElementById('closeSearchWinBtn').addEventListener('click', () => {
	closeSearchResultsWindow();
});



document.getElementById('itemsBtn').addEventListener('click', () => {
	hideServices();
	showItems();	
})

document.getElementById('servicesBtn').addEventListener('click', () => {
	hideItems();
	showServices();
})

document.getElementById('modeBtn').addEventListener('click', () => {
	changeTB('miniMenu', `${mmForModeTop}px`, -1);
	populate('contentContainer', 'change',`<a href="#" class="underlined centerContent opt firstOpt">Buying</a>
    <a href="user.html" class="opt centerContent secondOpt">Selling</a>`);
	openMiniMenu();
    changeH('miniMenu', '140px');
});



document.getElementById('container2').addEventListener('click', () => {
	showSVButtons();
})
document.getElementById('hvVBBtn').addEventListener('click', () => {
	hideSVButtons();
})
document.getElementById('svRetBtn').addEventListener('click', () => {
	document.getElementById('expSservicesCSS').href = '';

	document.getElementById('VMNIcon').src = RetVMNIcon
	populate('VMMsg', 'change', 'Retracted Service View');
	showVMN();
	setTimeout(() => {
		hideVMN();
	}, 2500)
})
document.getElementById('svExpBtn').addEventListener('click', () => {
	document.getElementById('expSservicesCSS').href = 'expServices.css';

	document.getElementById('VMNIcon').src = ExpVMNIcon
	populate('VMMsg', 'change', 'Expanded Service View');
	showVMN();
	setTimeout(() => {
		hideVMN();
	}, 2500)
})
