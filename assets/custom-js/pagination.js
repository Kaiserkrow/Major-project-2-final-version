function pageReveal(pageNum) {
  let page1 = document.getElementById("page-1");
  let page2 = document.getElementById("page-2");
  let pageNum1 = document.getElementById("pageNum1");
  let pageNum2 = document.getElementById("pageNum2");

  if (pageNum === 1) {
    console.log(pageNum);
    page1.classList.add("active");
    page2.classList.remove("active");
    pageNum1.classList.add("show");
    pageNum1.classList.remove("hide");
    pageNum2.classList.remove("show");
    pageNum2.classList.add("hide");
  } else {
    console.log(pageNum);

    page1.classList.remove("active");
    page2.classList.add("active");
    pageNum1.classList.add("hide");
    pageNum1.classList.remove("show");
    pageNum2.classList.add("show");
    pageNum2.classList.remove("hide");
  }
}
