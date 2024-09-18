let close = document.getElementById("close");
let open = document.getElementById("open");

// Event Listener for Close
close.addEventListener("click", hideElement);

function hideElement(){
    document.getElementById("content").style.display = "none";
}

// Event listener for open
open.addEventListener("click", revealElement);

function revealElement(){
    document.getElementById("content").style.display = "block";
}