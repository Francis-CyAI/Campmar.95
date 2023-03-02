


/*event listeners*/

/*
document.getElementById('catBtn').addEventListener('click', () => {
	loadCover();
	changeTB('miniMenu', `${mmForCatTop}%`, -1);
	changeWHOZ('miniMenu', `${mmForCatWidth}%`, `${mmForCatHeight}%`, '1', '5');
	changeLR('miniMenu', -1,  `${mmForCatRight}%`);

	var divNumber = 0;
	for (let i =  0; i < categories.length; i++) {
		if (getScreenWidth() <= 560) {
			//add one thing per line

			if (divNumber == 0) {
				divNumber = 1;
				populate('contentContainer', 'change', `<div id="catDiv${divNumber}"  class="specialDiv">${categories[i]}</div>`);
			} else {
				populate('contentContainer', 'add', `<div id="catDiv${divNumber}"  class="specialDiv">${categories[i]}</div>`);
			}
			divNumber++;

		} else {
			//add two things per line
				if (divNumber == 0) {
					divNumber = 1;
					populate('contentContainer', 'change', `<div id="catDiv${divNumber}"  class="specialDiv">${categories[i]}</div>`);
					populate(`catDiv${divNumber}`, 'add', `${categories[i + 1]}`);
				} else {
					populate('contentContainer', 'add', `<div id="catDiv${divNumber}"  class="specialDiv">${categories[i]}</div>`);
					populate(`catDiv${divNumber}`, 'add', `${categories[i + 1]}`);
				}
			divNumber++;
			i++;
		}	
	}
});



document.getElementById('helpBtn').addEventListener('click', () => {
	changeTB('miniMenu', `${mmForHelpTop}px`, -1);
	populate('contentContainer', 'change', `<a href="#" class="underlined centerContent opt firstOpt">Navigation</a>
    <a href="#" class="underlined centerContent opt secondOpt">FAQ</a>
    <a href="#" class="underlined centerContent opt thirdOpt">Contact Us</a>`);
	openMiniMenu();
});

document.getElementById('aboutBtn').addEventListener('click', () => {
	changeTB('miniMenu', `${mmForAboutTop}px`, -1);
	populate('contentContainer', 'change', `<a href="#" class="underlined centerContent opt firstOpt">Campmar</a>
    <a href="#" class="underlined opt centerContent secondOpt">Locations</a>`);
	openMiniMenu();
});

;

var menuClosed = true;
document.getElementById('menuBtn').addEventListener('click', () => {
   if (menuClosed == true)  {
		tranformMenuIcon();
        openMenu();
        menuClosed = false;
   } else if (menuClosed == false) {
        closeMenu();
		restoreMenuIcon();
        menuClosed = true;
   } 
});

document.getElementById('closeMiniMenuBtn').addEventListener('click', () => {
	closeMiniMenu();
})


document.getElementById('cartBtn').addEventListener('click', () => {
	openCart()
})

document.getElementById('cartCloseBtn').addEventListener('click', () => {
	closeCart();
})
*/