var targetElm = document.querySelector('.box')

anime({
  duration: 1000,
  loop: true,
  direction: 'alternate',
  update: function(anim){
    targetElm.style.filter = 'blur(' + 20 * anim.progress / 100 + 'px)'
  }
})