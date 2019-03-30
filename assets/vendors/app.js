// Wrap every letter in a span
$('.rumor').each(function(){
$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter align-text-bottom'>$&</span>"));
});

anime.timeline({loop: false})
.add({
    targets: '.rumor .letter',
    scale: [0, 1],
    duration: 2000,
    elasticity: 600,
    delay: function(el, i) {
      return 45 * (i+1)
    }
});

ScrollReveal().reveal('.photo', { 
  interval: 700,
  easing: 'ease-in'
});