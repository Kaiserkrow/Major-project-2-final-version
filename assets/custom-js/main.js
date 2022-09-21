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
}

function openCart() {
  let width = window.innerWidth;
  let cart = document.getElementById("myCart");
  if (width < 600) {
    cart.style.borderTopLeftRadius = "0px";
    cart.style.borderBottomLeftRadius = "0px";
    cart.style.width = "100vw";
  } else {
    cart.style.width = "250px";
  }
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

function closeCart() {
  document.getElementById("myCart").style.width = "0";
}

let items = document.querySelectorAll(".carousel1 .carousel-item1");

items.forEach((el) => {
  let minPerSlide = 4;
  let next = el.nextElementSibling;
  for (let i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

let items2 = document.querySelectorAll(".carousel2 .carousel-item2");

items2.forEach((el) => {
  let minPerSlide = 4;
  let next = el.nextElementSibling;
  for (let i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items2[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});
