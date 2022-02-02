
var canvas = new fabric.Canvas('myCanvas');

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=500


block_image_width = 5;
block_image_height = 5;
ball_obj.scaleToWidth(50);
ball_obj.scaleToWidth(50);

function load_img() 
{
	fabric.Image.fromURL("golf-h.png",function(img){
	hole_obj = img;
	hole_obj.scaleToWidth(50);
	hole_obj.scaleToHeight(50);
	hole_obj.set({
		top:hole_y,
		left:hole_x;
	});
canvas.add(hole_obj);
	})
	new_image();
}

function new_image()
{fabric.Image.fromURL("ball.png",function(img){
	ball_obj = img;
	ball_obj.scaleToWidth(50);
	ball_obj.scaleToHeight(50);
	ball_obj.set({
		top:hole_y,
		left:hole_x;
	});
canvas.add(ball_obj);
	})
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if ((ball_x==hole_x)&&(ball_y==hole_y)) 
	{
		canvas.remove(ball_obj);
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}

	
	function up()
	{
		if (ball_y>=0) {
			ball_y = ball_y-5;
			console.log("When up arrow is pressed, x = " + ball_x + " | y = " +ball_y);
			uploadball()
		}
	}

	function down()
	{
		if (ball_y<=400) {
			ball_y = ball_y+5;
			console.log("When down arrow is pressed, x = " + ball_x + " | y = " +ball_y);
			uploadball()
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x =ball_x-5;
				console.log("When left arrow is pressed, x = " + ball_x + " | y = " +ball_y);
			uploadball()
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
		 ball_x = ball_x+5;
			console.log("When right arrow is pressed, x = " + ball_x + " | y = " +ball_y);
		uploadball()

		}
	}
	
}

b
function uploadball() {
fabric.Image.fromURL("ball.png", function (Img);
}




