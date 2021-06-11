//const follower_container = document.getElementById("follower_container");
const ball1 = document.getElementById("ball1");
let tab = [];

document.addEventListener("mousemove", e => {
    e.preventDefault();
/*    follower_container.style.top = e.clientY + "px";
    follower_container.style.left = e.clientX + "px";*/

    ball1.style.top = e.clientY + "px";
    ball1.style.left = e.clientX + "px";

    let obj = {
        x : e.clientX, 
        y : e.clientY
    }
    tab.push(obj);

    /*for(let i = 0; i < tab.length; i++){
        let ball = document.createElement("div");
        ball.classList.add("ball");

        ball.style.top = tab[i].y + "px";
        ball.style.left = tab[i].x + "px";

        document.body.appendChild(ball);
        
        setTimeout(() => {
            tab.splice(0, tab.length-1)
            document.body.removeChild(ball)
        }, 70)
    }*/
})