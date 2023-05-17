const signup = document.querySelector('.signup');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cfrmpassword = document.getElementById('cfrmpassword');

function showerror(input,message) {
	const formcontrol= input.parentElement;
	formcontrol.className= "field error";

	const small = formcontrol.querySelector('small');
	small.innerText = message;
}
function showsuccess(input){
	const formcontrol = input.parentElement;
	formcontrol.className = "field success";
}
signup.addEventListener('submit',function(e){
	console.log(username.value)

	if (username.value === ''){
		showerror(username,'*Fill out username');
	}
	else {
		showsuccess(username);
	}
	if (email.value === ''){
		showerror(email,'*Please fill your email');
	}
	else{
		showsuccess(email);
	}
	if (password.value === '') {
		showerror(password,"*Please fill your password");
	}
	else{
		showsuccess(password);
	}

	if (cfrmpassword.value ==='' ){
		showerror(cfrmpassword,"*Required");
	}
	else{
		if (password.value != cfrmpassword.value) {
			showerror(cfrmpassword,"*Doesn't match the password");
	}
	else{
		showsuccess(cfrmpassword);
	}
	}
e.preventDefault();
})