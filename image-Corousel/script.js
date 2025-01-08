const pre = document.querySelector(".previous");
const next = document.querySelector(".next");
let imageCont = document.querySelector(".image-slides");
let slides = document.querySelectorAll(".slide");
let places = document.querySelectorAll('.place');
console.log(slides)
// let width;



let offsetWidth = imageCont.offsetWidth
let width = 0;
let increase = offsetWidth;
let max = increase * (slides.length-1);
let intervalTime = 2000;

let run = setInterval(scrollImg, intervalTime);
function scrollImg() {
	
  checkWidthInc();
  imageCont.scroll(width, 0);
 
}
places.forEach((place,index)=>{
	place.addEventListener('click',()=>{
		clearInterval(run);
		
		console.log('clicked',index);
		width = increase * index;
		updatePlace()
		imageCont.scroll(width, 0);
	})
})
pre.addEventListener("click", () => {	
	clearInterval(run);
	checkWidthDec()
	imageCont.scroll(width, 0);
  });
next.addEventListener("click", () => {
	clearInterval(run);
	checkWidthInc();
	imageCont.scroll(width, 0);  
  });

function checkWidthDec(){
	updatePlace()
	if (width === 0 ) width = max;
	else width -= increase;
	
}
function checkWidthInc(){
	updatePlace()
	if (width === max) width = 0;
	else width += increase;
	
}
function updatePlace(value){
	let elementNumber =checkElementNumber();
	console.log(elementNumber);
	// console.log(places[elementNumber]);
	places[elementNumber].classList.add('selected');

	
	setTimeout(()=>{places[elementNumber].classList.remove('selected');},intervalTime);
	
}
function checkElementNumber(){
	for (let i =0; i < slides.length; i++){
		if(slides[i].offsetLeft === width){
			return i;
		}
	}
	// let value ;
	// slides.forEach((slide, index) => {
		
	// 	if(slide.offsetLeft === width) console.log('hello');
		
		
	//   });
	// return value;
}