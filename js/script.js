const projects = document.querySelector(".projects .container");
const mobileNav = document.querySelector(".mobile-nav");
const newElement = `<div class="box">
                      <a href="#">
                      <img src="img/bg-projects.svg" alt=""/>
                      </a>
                      </div>`;

for (let i = 0; i <= 9; i++) {
  projects.insertAdjacentHTML("afterbegin", newElement);
}

// margin top
mobileNav.style.marginTop = window.outerHeight - 400 + "px";
// pengkondisian mobile nav
window.addEventListener("scroll", (e) => {
  if (window.scrollY <= 100) {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "flex";
  }
  // console.log(window.scrollY);
});

// animate jquery navbar smooth
$(".btn").on("click", function (e) {
  // ambil isi href
  const href = $(this).attr("href");
  const newElement = $(href);

  $("html,body").animate(
    {
      scrollTop: newElement.offset().top - 20,
    },
    500
  );
  e.preventDefault();
});

$("#mobileNav").on("click", function (e) {
  const hrefA = $(this).attr("href");
  const elementA = $(hrefA);
  $("html,body").animate(
    {
      scrollTop: elementA.offset().top,
    },
    500
  );
  e.preventDefault();
});
