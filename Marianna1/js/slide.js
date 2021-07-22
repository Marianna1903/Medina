let pic = document.getElementById("div_slide");
let h2 = document.getElementsByClassName("h2")[0];
let h5 = document.getElementsByClassName("h5")[0];
let btn = document.getElementsByClassName("btn");
let span_1 = document.getElementById("span_1");
let span_2 = document.getElementById("span_2");
let span_3 = document.getElementById("span_3");

span_2.addEventListener("click", function(){
	pic.style.backgroundImage = "url('../img/slide-02.jpg')";
	h2.innerHTML = "Years of"+'<br>'+"Experience";
	h5.innerHTML = "Since our foundation, we've been"+'<br>'+"delivering diagnostic solutions.";
})

span_3.addEventListener("click", function(){
	pic.style.backgroundImage = "url('../img/slide-03.jpg')";
	h2.innerHTML = "Qualified Team"+'<br>'+"of Experts";
	h5.innerHTML = "Our team of diagnosticians is always"+'<br>'+"ready to help you be healthier.";
})
span_1.addEventListener("click", function(){
	pic.style.backgroundImage = "url('../img/slide-01.jpg')";
	h2.innerHTML = "Take Care of"+'<br>'+"Your Health";
	h5.innerHTML = "At Medina, we are dedicated to"+'<br>'+"diagnosing all kinds of diseases.";
})
