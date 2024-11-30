
let aboutme = document.getElementById("aboutme");
let techstack = document.getElementById("techstack")
let projects = document.getElementById("projects")

function aboutme_open(){
    console.log("called");
    aboutme.classList.add("open_popup");
}

function aboutme_close(){
    aboutme.classList.remove("open_popup");
}

function techstack_open(){
    techstack.classList.add("open_popup");
}

function techstack_close(){
    techstack.classList.remove("open_popup");
}

function projects_close(){
    projects.classList.remove("open_popup");
}
function projects_open(){
    projects.classList.add("open_popup");
}