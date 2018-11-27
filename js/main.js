let element = document.querySelectorAll('.container');

function scrollToNext(el) {
  // console.log(el);
  element[el].nextElementSibling.scrollIntoView({
    behavior: 'smooth'
  });
}

function scrollToPrev(el) {
  // console.log(el);
  element[el].previousElementSibling.scrollIntoView({
    behavior: 'smooth'
  });
}
