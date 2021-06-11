const follower = document.getElementById("follower");

document.addEventListener("mousemove", (e) => {
    e.preventDefault();
    follower.style.top = e.clientY + "px";
    follower.style.left = e.clientX + "px";
})