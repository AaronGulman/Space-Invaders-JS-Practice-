const grid  = document.querySelector('.grid')
let currenShooterIndex = 202;
let width = 15;

for(let i = 0; i < 225; i++){
	const square = document.createElement('div')
	grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

const alienInvaders = [
	0,1,2,3,4,5,6,7,8,9,
	15,16,17,18,19,20,21,22,23,24,
	30,31,32,33,34,35,36,37,38,39
]

function draw(){
	for(let i = 0; i < alienInvaders.length; i++){
		squares[alienInvaders[i]].classList.add('invader')
	}
}

draw()



function moveShooter(e){
	squares[currenShooterIndex].classList.remove('shooter')
	switch(e.key){
		case 'ArrowLeft':
			if(currenShooterIndex % width !== 0) currenShooterIndex -=1;
			break;
		case 'ArrowRight':
			if(currenShooterIndex % width < width -1) currenShooterIndex +=1;
			break;
	}
	squares[currenShooterIndex].classList.add('shooter')

}

document.addEventListener('keydown',moveShooter)
