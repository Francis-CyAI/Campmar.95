/* Constants and Variables */

const otherLocatHtml = `
&nbsp; <input type="text" class="logInput log-other-locat-input" placeholder="Please enter here">
`;


/* Event Listeners */

document.getElementById('logBackBtn').addEventListener('click', () => {
	goHome();
})
document.getElementById('signinFormBtn').addEventListener('click', () => {
	showSignInForm();
})
document.getElementById('signupFormBtn').addEventListener('click', () => {
	showSignUpForm();
})


document.getElementById('signinFormBtn').addEventListener('click', () => {
	showSignInForm();
})
document.getElementById('signupFormBtn').addEventListener('click', () => {
	showSignUpForm();
})
document.getElementById('signinBtn').addEventListener('click', () => {
	//Temporarily
	appreciate();
})
document.getElementById('signupBtn').addEventListener('click', () => {
	//Temporarily
	appreciate();
})


document.getElementById('logMembershipChoice').addEventListener('change', () => {

	let chosenMembership = document.getElementById('logMembershipChoice').value;

	switch (chosenMembership) {
		case 'student':
			//remove cover
			changeZ('LLSCover', '-1');
			changeO('logLocatLabel', '1');
		break;
		default:
			changeZ('LLSCover', '6');
			changeO('logLocatLabel', '0');
	} 
	
})

document.getElementById('logLocatChoice').addEventListener('change', () => {

	let chosenLocation = document.getElementById('logLocatChoice').value;

	switch (chosenLocation) {
		case 'other':
			populate('otherLocatChoice', 'change', otherLocatHtml);
		break;
		default:
			populate('otherLocatChoice', 'change', ``);
	} 
	
})