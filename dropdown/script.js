const courses =document.getElementById('courses');
const course = document.querySelector('.course')
const drop = document.querySelector('.drop');
const main = document.querySelector('main');
let coursesMouse = mouseActivities(courses);
let dropMouse = mouseActivities(drop);
let courseMouse = mouseActivities(course);
let mainMouse =mouseActivities(main)
courseMouse.add(drop)
coursesMouse.add(drop);
dropMouse.remove(drop);
mainMouse.remove(drop);

function mouseActivities(element){
	function add(visible){
		element.addEventListener('mouseover',()=>{
			console.log('enter')
			visible.classList.add('visible');
		})
	}
function remove(visible){
			element.addEventListener('mouseout',()=>{
				console.log('leaving')
				visible.classList.remove('visible');
		})
	}
	return {
		add,remove,
	}
}

exports.printMsg = function() {
    console.log("This is a message from the simple-dropdown package");
  }