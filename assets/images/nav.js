function openNav() {
  let width = window.innerWidth;
  let sideBar = document.getElementById("mySidebar");
  if (width < 600) {
    sideBar.style.borderTopRightRadius = "0px";
    sideBar.style.borderBottomRightRadius = "0px";
    sideBar.style.width = "100vw";
  } else {
    sideBar.style.width = "250px";
  }

  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
