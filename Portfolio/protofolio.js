var tablinks = document.querySelectorAll(".tablinks");
var tabcontents = document.querySelectorAll(".intro-content");

function opentab(tabname) {
    tablinks.forEach(function(tablink) {
        tablink.classList.remove("activelink");
    });
    tabcontents.forEach(function(tabcontent) {
        tabcontent.classList.remove("activetab");
    });
    event.currentTarget.classList.add("activelink");
    document.getElementById(tabname).classList.add("activetab");
}

var sidemenu = document.getElementById("side");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-250px";
};