const sideNav = document.querySelector('.sidenav');
const logoType = document.querySelector('.logo-type');
const textLinks = [...document.getElementsByClassName('link-text')];
let index = 0;

// Mouse Enter
sideNav.addEventListener('mouseenter', function() {

  // Open the side nav
  sideNav.classList.add('open');

  // Wait until nav is open, then remove 'display: none'
  setTimeout(function() {
    logoType.classList.remove('display-none');
    textLinks.forEach(function(e) {
      e.classList.remove('display-none');
    });
  }, 200);


  // Wait for display:none to be removed...
  setTimeout(function() {
    logoType.classList.remove('hidden');
    //Then animate the opacity of each text line, with a delay
    textLinks.forEach(function(e, index) {
      setTimeout(function() {
        e.classList.remove('hidden');
        index++;
      }, index * 40);
    });
  }, 200);



});

// Mouse Leave
sideNav.addEventListener('mouseleave', function() {
  // Animate each link to 0 opacity at the same time
  logoType.classList.add('hidden');
  textLinks.forEach(function(e) {
    e.classList.add('hidden');
  });

  // Then add display:none to each
  setTimeout(function() {
    logoType.classList.add('display-none');
    textLinks.forEach(function(e) {
      e.classList.add('display-none');
    });
  }, 50);

  // Then animate the sidenav closed
  setTimeout(function() {
    sideNav.classList.remove('open');
  }, 100);

});
