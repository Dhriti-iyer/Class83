var last_position_of_x,last_position_of_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=2;
var screenwidth=screen.width;
var newwidth=screen.width-70;
var newheight=screen.height-300;
if(screenwidth<992)
{
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheight;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e)
{
    color=document.getElementById("color_id").value;
    width=document.getElementById("width_id").value;
    console.log("touchstart");
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e)
{
    console.log("touchmove");
    current_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    console.log("Last positoin of x and y coordinates are");
    console.log("x =" + last_position_of_x + "y =" + last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("current positoin of x and y coordinates are");
    console.log("x =" + current_position_of_x + "y =" + current_position_of_y);
    ctx.lineTo(current_position_of_x,current_position_of_y);
    ctx.stroke();
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
}
function clear_area() 
{ 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
} 
