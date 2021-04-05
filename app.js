
let lession = ["Let us now look deep into what are objects. If we consider the real-world, we can find many objects around us, cars, dogs, humans, etc. All these objects have a state and a behavior.","If we consider a dog, then its state is - name, breed, color, and the behavior is - barking, wagging the tail, running.","If you compare the software object with a real-world object, they have very similar characteristics.","Software objects also have a state and a behavior. A software object's state is stored in fields and behavior is shown via methods.","So in software development, methods operate on the internal state of an object and the object-to-object communication is done via methods.","A class can have any number of methods to access the value of various kinds of methods. In the above example, barking(), hungry() and sleeping() are methods.","Following are some of the important topics that need to be discussed when looking into classes of the Java Language.","A collections framework is a unified architecture for representing and manipulating collections. All collections frameworks contain the following","In addition to collections, the framework defines several map interfaces and classes. Maps store key/value pairs. Although maps are not collections in the proper use of the term, but they are fully integrated with collections.","A constructor initializes an object when it is created. It has the same name as its class and is syntactically similar to a method. However, constructors have no explicit return type."];
let textAreaBoxTag = document.querySelector('#text');
let orginalBoxTag = document.querySelector('#orginalText')
let minutesTag = document.querySelector('#minutes');
let secondTag = document.querySelector('#second');
let millisecondTag = document.querySelector('#millisecond');
let congratulations = document.querySelector('#Congrat');
let sound = document.querySelector('#clap-sound');

let min = 0;
let sec =0;
let m_sec = 0;
let count = 0;
let timeRunning = false;
let interval = null;

// lession

let moreText = (index) =>{
	let text = lession[index];
	orginalBoxTag.innerText = text;
 

}
// Timmer 
let timeTag = () =>{
	count++
	min = Math.floor((count/100)/60);
	sec = Math.floor((count/100)-(min*60));
	m_sec = Math.floor(count-(sec*100)-(min*6000));
	// console.log(m-sec);
	minutesTag.innerText = leadingZero(min);
	 secondTag.innerText =  leadingZero(sec);
	millisecondTag.innerText= leadingZero(m_sec);
}

// Leading Zero

let leadingZero = (time) => {
	if(time<10){
		return "0"+time
	}
	else{
		return time
	}
}
textAreaBoxTag.addEventListener('keyup',function(){
	let textEnterLength  = textAreaBoxTag.value.length;
	if(textEnterLength === 1 && !timeRunning){
		interval = setInterval(timeTag,10)
		timeRunning = true;
	}
	let orginalTag = orginalBoxTag.innerHTML;
	let textArea = textAreaBoxTag.value;
	let paritalTag = orginalTag.substr(0,textArea.length);
	evaluate(orginalTag,textArea,paritalTag); 
	
})

let evaluate = (orginalTag,textArea,paritalTag) =>{

	if(textArea === ''){
		colorValue('gray')
		

	}
	else{
		if(orginalTag === textArea){
			// green
			colorValue('green');
			congratulations.style.display = 'block';
			clearInterval(interval);
			sound.play();


		}
		else{
			if(textArea === paritalTag){
			colorValue('blue')
		}
		else{
			colorValue('red')
		}
		}
		
		
	}
	}



// Colors

let colorValue = (color) =>{
	textAreaBoxTag.style.borderColor = color;
}

