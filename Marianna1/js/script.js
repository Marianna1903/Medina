let pic = document.getElementById("div_slide");
let h2 = document.getElementsByClassName("h2")[0];
let h5 = document.getElementsByClassName("h5")[0];
let btn = document.getElementsByClassName("btn");
let span_1 = document.getElementById("span_1");
let span_2 = document.getElementById("span_2");
let span_3 = document.getElementById("span_3");

span_2.addEventListener("click", function(){
	pic.style.transition = "2s";
	pic.style.backgroundImage = "url('img/slide-02.jpg')";
	h2.innerHTML = "Years of"+'<br>'+"Experience";
	h2.style.transition = "2s";
	h5.innerHTML = "Since our foundation, we've been"+'<br>'+"delivering diagnostic solutions.";
	h5.style.transition = "2s";
	// span_2.style.border = "3px solid #1d86bc"
})

span_3.addEventListener("click", function(){
	pic.style.transition = "2s";
	pic.style.backgroundImage = "url('img/slide-03.jpg')";
	h2.innerHTML = "Qualified Team"+'<br>'+"of Experts";
	h2.style.transition = "2s";
	h5.innerHTML = "Our team of diagnosticians is always"+'<br>'+"ready to help you be healthier.";
	h5.style.transition = "2s";
})
span_1.addEventListener("click", function(){
	pic.style.transition = "2s";
	pic.style.backgroundImage = "url('img/slide-01.jpg')";
	h2.innerHTML = "Take Care of"+'<br>'+"Your Health";
	h2.style.transition = "2s";
	h5.innerHTML = "At Medina, we are dedicated to"+'<br>'+"diagnosing all kinds of diseases.";
	h5.style.transition = "2s";
})


let p_1 = document.getElementsByClassName("p_i_had")[0];
let p_2 = document.getElementsByClassName("p_i_would")[0];
let p_name = document.getElementsByClassName("p_betty")[0];
let p_name_2 = document.getElementsByClassName("p_bryan")[0];
let span_patient_1 = document.getElementsByClassName("span_bryan")[0];
let span_patient_2 = document.getElementsByClassName("span_betty")[0];

let img_1 = document.getElementById("img_1_testimonials");
let img_2 = document.getElementById("img_2_testimonials");

let span_test_1 =  document.getElementById("span_testimonials_slide_1");
let span_test_2 =  document.getElementById("span_testimonials_slide_2");

span_test_2.addEventListener("click",function(){
	p_1.innerHTML = "I would like to thank and compliment the staff at Medina, including the outpatient, laboratory staff and cardiac division during my stay at your facility on July 9th and 10th.";
	p_name.innerHTML = "Bryan Green";
	p_2.innerHTML = "I had a colonoscopy at Medina Diagnostic Center. From the moment I entered the center, I was greeted and treated warmly and respectfully and it was the best experience.";
	p_name_2.innerHTML = "Betty Wade";
	img_1.src = 'img/user-bryan-green.jpg';
	img_2.src = 'img/user-betty-wade.jpg';
	// span_patient_1.innerHTML = "Patient";
	// span_patient_2.innerHTML = "Patient";

})
span_test_1.addEventListener("click",function(){
	p_2.innerHTML = "I would like to thank and compliment the staff at Medina, including the outpatient, laboratory staff and cardiac division during my stay at your facility on July 9th and 10th.";
	p_name_2.innerHTML = "Bryan Green";
	p_1.innerHTML = "I had a colonoscopy at Medina Diagnostic Center. From the moment I entered the center, I was greeted and treated warmly and respectfully and it was the best experience.";
	p_name.innerHTML = "Betty Wade";
	img_2.src = 'img/user-bryan-green.jpg';
	img_1.src = 'img/user-betty-wade.jpg';
	// span_patient_1.innerHTML = "Patient";
	// span_patient_2.innerHTML = "Patient";

})



