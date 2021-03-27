const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let isJumping = false;
let position = 0;

function handleKeyUp(event){
	if(event.keyCode === 32){
		if(!isJumping){
		jump();
		}
	}
}

function jump(){
	
	isJumping = true;
	
	let upInterval = setInterval(()=>{
		if(position >=150){
			clearInterval(upInterval)
		
		let downInterval = setInterval(() =>{
			if(position<=0){
				clearInterval(downInterval);
				isJumping = false;
			}else{
				position -=20;
				dino.style.bottom = position+'px';
			}
			
		},20);
		}else{
			position += 20;
			dino.style.bottom = position+'px';
		
		}
		
	}, 20);
}
	
	function createCactus(){
		const cactus = document.createElement('div'); // gera um HTML
		let cactusPo = 1000;
		let randomTime = Math.random()*6000;
		
		
		cactus.classList.add('cactus');
		cactus.style.left = 1000 + 'px'; 
		background.appendChild(cactus); //adiciona um filho
		
		let leftInterval = setInterval(() =>{
			cactusPo -=10;
			cactus.style.left = cactusPo + 'px';
			
			if(cactusPo < -60){
				clearInterval(leftInterval);
				background.removeChild(cactus);
			}else if(cactusPo > 0 && cactusPo < 60 && position <60){
				// game over
				clearInterval(leftInterval);
				document.body.innerHTML = "<h1 class='game-over'> Fim de Jogo </h1>"
			}else{
				cactusPo -=10;
				cactus.style.left = cactusPo + 'px';
			}
		},20);
		
		setTimeout(createCactus,randomTime)
	}
createCactus();
document.addEventListener('keyup',handleKeyUp);