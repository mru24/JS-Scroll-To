// SCROLL TO NEXT/PREV SECTION BUTTONS
let element = document.querySelectorAll('.section');

function scrollToNext(el) {
  console.log(el);
  element[el].nextElementSibling.scrollIntoView({
    behavior: 'smooth'
  });
}

function scrollToPrev(el) {
  console.log(el);
  element[el].previousElementSibling.scrollIntoView({
    behavior: 'smooth'
  });
}

// NAVBAR
let nav = document.querySelector('.navbar')
let navItem = document.querySelectorAll('.navbar li')

// HAMBURGER
let burgerContainer = document.querySelector('.burger');
let bar1 = document.querySelector('.bar');

burgerContainer.addEventListener('click', function () {
  bar1.classList.toggle('ACTIVE');
  if(bar1.classList.contains('ACTIVE')) {
    bar1.classList.add('st2');
    setTimeout(function () {
      bar1.classList.add('st3');
      nav.classList.add('showNav');
    }, 900);
  } else {
    bar1.classList.remove('st3');
    setTimeout(function () {
      bar1.classList.remove('st2');
      nav.classList.remove('showNav');
    }, 700);
  }
});

for (var i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', function () {
    bar1.classList.remove('ACTIVE')
    bar1.classList.remove('st3');
    setTimeout(function () {
      bar1.classList.remove('st2');
      nav.classList.remove('showNav');
    }, 700);
  })
}

burgerContainer.addEventListener('mouseover', function () {
  bar1.classList.add('st1');
});
burgerContainer.addEventListener('mouseleave', function () {
  bar1.classList.remove('st1');
});
