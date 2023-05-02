'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});
//console.log(btnCloseModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////
///// Selecting elements
//console.log(document.documentElement);
//console.log(document.head);
//console.log(document.body);
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

// allSections.forEach((sec, i) => {
//   if (i % 2 === 0) sec.style.backgroundColor = 'green';
//   i % 2 === 0
//     ? (sec.style.backgroundColor = 'green')
//     : (sec.style.backgroundColor = 'red');
// });

const section1 = document.getElementById('section--1');

//////
////// Creating elements

////we can use these DOM methods to create a new element and add it to our HTML

//first Method;

//.insertAdjacentHTML()
//prepend() prepend
//append()
//before()
//after()

//second Method document.createElement() tis method takes a string as parametter

const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = 'We like our cookie here in quebec';
message.innerHTML = `we use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;
//console.log(header);
/////////
// Manipulating Style and Attributes with DOM methods
// closeModes.addEventListener('click', function () {
//   message.remove();
// });

// const testing123 = document.createElement('button');
// testing123.style.backgroundColor = 'red';
// testing123.style.border = '1px solid black ';
// testing123.style.borderRadius = '10rem';
// testing123.textContent = 'HELO MY FRIEND';
// testing123.addEventListener('click', function () {
//   console.log('Thank you God');
// });

// header.prepend(testing123);

// header.append(message);
// const closeModes = document.querySelector('.btn--close-cookie');
// console.log(getComputedStyle(message).color);
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// ///
// //Manipulating Attributes
// //here we select the logo and get and set its src value
// const logo = document.querySelector('.nav__logo');
// console.log(logo.src);
// console.log(logo.getAttribute('src'));
// logo.src = 'img/x2.jpg';

// const twiter = document.querySelector('.twitter-link');
// console.log(twiter);
// console.log(twiter.getAttribute('href'));
// twiter.href = 'https://mb-portfolio-action.netlify.app/';

// /// Manipulating classes/
// //
// // these are the must know methods

// logo.classList.add(); // add a class into the class list;
// logo.classList.remove(); // remove a class from the class list
// logo.classList.toggle(); // add a class into the class list if it is not already there if it's there, remove it
// logo.classList.contains(); // check a class in the class list

// IMPLIMENTING SMOOTH SCROLING here we call scrollIntoView()on a element called section1 this method takes an objects which has a key = behavior and a value 'smoth'

//const section1 = document.querySelector('#section--1');
document
  .querySelector('.btn--scroll-to')
  .addEventListener('click', function () {
    console.log('this is the right button');
    section1.scrollIntoView({ behavior: 'smooth' });
  });

//TYPE OF EVENTS AND EVENT HANDLERS

//mousseenter event handler.

// const h2 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function () {
//   alert('you have added an event listener to this H1');
// });

// How to remove a event listerner

// const storyTeller = function () {
//   alert('DJelli BABA');
//   h1.removeEventListener('mouseenter', storyTeller);
// };
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', storyTeller);

//Event Propagatin: Bubbling and Capturing
// Generating random colors
//rgb(255, 255, 255);

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));

// const navLink = document.querySelector('.nav__link');
// console.log(navLink.textContent);
// navLink.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('nav Link', e.target);
// });
// const navLINKs = document.querySelector('.nav__links');
// console.log(navLINKs.textContent);
// navLINKs.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('nav Links', e.target);
// });
// const navBar = document.querySelector('.nav');
// navBar.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('nav Bar', e.target);
// });

// const navlinks = document.querySelectorAll('.nav__link');
// console.log(navlinks);

// navlinks.forEach(a => {
//   a.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//implementing Event Delegation
//1- Add eventListerner to common parent;
//2- Determine what element originated the event
// this first method is not recommanded for large application
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   //Matching strategy
//   e.preventDefault();
//   if (e.target.classList.contains('nav__link')) {
//     console.log('link found');

//     const id = e.target.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });
// this is the best way of delegating Event
//1- Add eventListerner to common parent
//2- work out the logic
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// DOM Traversing
// what is DOM traversing ? It means walking on the DOM. Which mean we can  select an element base on another element

// const h1 = document.querySelector('h1');
// //going downwards: child

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.children);
// // we can also use these methods to set style on the element children

// h1.firstElementChild.style.color = 'red';
// h1.lastElementChild.style.color = 'blue';

// // Going upwards: parent
// // now we are going up to the parent of the selected element which is h1;
// console.log(h1.parentElement);
// // const parentH1 = (h1.parentElement.style.backgroundColor = 'yellow');
// // parentH1.querySelector('.btn--text').style.backgroundColor = 'yellow';
// // we use closest() this method

// h1.closest('.header').style.backgroundColor = 'black';

// //Going sideway: siblings

// console.log(h1.previousElementSibling);
// h1.nextElementSibling.textContent = 'nice juicy pussy';

/// BUILDING A TABBED COMPONENT

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
console.log(tabContainer);

const tabContent = document.querySelectorAll('.operations__content');
console.log(tabContent);
tabContainer.addEventListener('click', function (e) {
  const clisked = e.target.closest('.operations__tab');

  if (!clisked) return;
  tabs.forEach(x => x.classList.remove('operations__tab--active'));
  tabContent.forEach(x => x.classList.remove('operations__content--active'));
  clisked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${clisked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// PASSING ARGUMENTS TO EVENT HANDLERS

const opacityCaller = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const linked = e.target;
    const siblings = linked.closest('.nav').querySelectorAll('.nav__link');

    siblings.forEach(x => {
      if (x !== linked) x.style.opacity = opacity;
    });
  }
};
const navigation = document.querySelector('nav');

navigation.addEventListener('mouseover', function (e) {
  opacityCaller(e, 0.5);
});

navigation.addEventListener('mouseout', function (e) {
  opacityCaller(e, 1);
});

/// Implementing a sticky Navigation using Intersection Observer API
const observerCallback = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) navigation.classList.add('sticky');
  else navigation.classList.remove('sticky');
};
const observerOpts = {
  root: null,
  threshold: [0, 0.2],
  rootMargin: '-90px',
};

// the observerCallback() this function is call each time section1 reaches the threshold which is 10%
// const observer = new IntersectionObserver(observerCallback, observerOpts);
// observer.observe(section1);

const headerObserver = new IntersectionObserver(observerCallback, observerOpts);

headerObserver.observe(header);
const allSection = document.querySelectorAll('.section');
/// Revealing Elements on Scroll
const revealSection = function (entries, observer) {
  const [entry] = entries;
  //console.log(entry.target);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
//Implementing lazy Loading Images Using IntersectionObserver
const imgTarget = document.querySelectorAll('img[data-src]');
console.log(imgTarget);

const loading = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
};

const imgObserver = new IntersectionObserver(loading, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTarget.forEach(x => {
  imgObserver.observe(x);
});
//Building a Slider Component
///////////////////////////////////////
// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
