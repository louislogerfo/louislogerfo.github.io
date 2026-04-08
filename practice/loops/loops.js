let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");

//fill in code for canvas1 here
for(let y= 50; y<=150; y +=50){
	for(let x = 0; x <= 800; x += 75){
		ctx.fillRect(x, y, 50, 20);
}
}




canvas = document.getElementById("canvas2");
ctx = canvas.getContext("2d");

//fill in code for canvas2 here
for(let y= 0; y <= 800; y +=50){
	let c = y / 50;

	for(let x = 0; x <= c * 75; x += 75){
	ctx.fillRect(x, y, 50, 20);
}
}



canvas = document.getElementById("canvas3");
ctx = canvas.getContext("2d");

//fill in code for canvas3
let size = 100;

for(let y = 0; y <= 800; y += 50){
	let c = y / 50;

	for(let x = 0; x <= 800; x += 75){
		if(x < c * 75 - 75 || x > c * 75 + 75){
		ctx.fillRect(x, y, 50, 20);

}
}
}


canvas = document.getElementById("canvas4");
ctx = canvas.getContext("2d");

for(let y = 0; y < 800; y += size) {
	for(let x = 0; x < 800; x += size) {
		if((x / size + y / size) % 2 === 0) {
			ctx.fillStyle = "black";
		} else {
			ctx.fillStyle = "white";
		}
		ctx.fillRect(x,y, size, size);
	}
}

//fill in code for canvas4 here
