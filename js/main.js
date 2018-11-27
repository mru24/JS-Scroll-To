let element = document.querySelectorAll('.container');

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


// for (var i = 0; i < element.length; i++) {
//   element[i].addEventListener('click', function () {
//     console.log(element[i]);
//     element[i].nextElementSibling.scrollIntoView({
//         behavior: 'smooth'
//       });
//   })
// }
// element[0].addEventListener('click', function () {
//   element[0].nextElementSibling.scrollIntoView({
//       behavior: 'smooth'
//     });
// })
