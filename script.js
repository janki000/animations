const tl = gsap.timeline({defaults: {ease: 'linear'},
repeat:-2,
yoyo:true
})

.to('.f', {stagger: 0.2, opacity: 0, duration: 0.2, delay: '25%'})

.to('.tronc', {opacity: 2, duration: 0.2, delay: '35%'})

gsap.registerPlugin(ScrollTrigger);


const t2 = gsap.timeline({defaults: {ease: 'linear'},
})
.to('.tronc', { 
  y: '2100px',
  opacity: -5,
  scrollTrigger: {
    scrub: 0.3,
    markers: true,
    start: 'top top',
    end: 'bottom 90%',
  }
})

  .to('.feuilles', { 
    y: '2100px',
    opacity: -5,
    delay: 2,
    scrollTrigger: {
      scrub: 0.3,
      scale: 2,
      markers: true,
      start: 'top top',
      end: 'bottom 90%',
    }
  })
  

  .to('.oiseau1', { 
    y: '2100px',
    x: '-1100px',
    opacity: -5,
    delay: 0.5,
    stagger: 0.2,
    scrollTrigger: {
      scrub: 0.3,
      scale: 2,
      markers: true,
      start: 'top top',
      end: 'bottom 90%',
      
    }
  })
  
  
  .to('.oiseau2', { 
    y: '2100px',
    x: '-1100px',
    opacity: -5,
    delay: 0.5,
    stagger: 0.2,
    scrollTrigger: {
      scrub: 0.3,
      scale: 2,
      start: 'top top',
      end: 'bottom 90%',
      
    }
  })

  .to('.oiseau3', { 
    y: '2100px',
    x: '2100px',
    opacity: -5,
    delay: 0.5,
    stagger: 0.2,
    scrollTrigger: {
      scrub: 0.3,
      scale: 2,
      start: 'top top',
      end: 'bottom 90%',
      
    }
  })
  
  .to('.oiseau4', { 
    y: '2100px',
    x: '2100px',
    opacity: -5,
    delay: 0.5,
    stagger: 0.2,
    scrollTrigger: {
      scrub: 0.3,
      scale: 2,
      start: 'top top',
      end: 'bottom 90%',
    }
  })

  .to('.oiseau5', { 
    y: '2100px',
    x: '2100px',
    opacity: -5,
    delay: 0.5,
    stagger: 0.2,
    scrollTrigger: {
      scrub: 0.3,
      scale: 2,
      start: 'top top',
      end: 'bottom 90%',
    }
  })
  

  const t3 = gsap.timeline({defaults: {ease: 'linear'},
})

.to('.nature', { 
  y: '2100px',
  rotation: 180,
  opacity: -5,
  scrollTrigger: {
    scrub: 0.3,
    markers: true,
    start: 'top top',
    end: 'bottom 90%',
  }
})

.to('.quebec', { 
  x: '2100px',
  rotation: 180,
  opacity: -5,
  scrollTrigger: {
    scrub: 0.3,
    markers: true,
    start: 'top top',
    end: 'bottom 90%',
  }
})

.to('.N', { 
  x: '2200px',
  y: '3100px',
  rotation: -180,
  opacity: -5,
  scrollTrigger: {
    scrub: 0.3,
    markers: true,
    start: 'top top',
    end: 'bottom 90%',
  }
})
.to('.A', { 
  x: '4200px',
  y: '3700px',
  rotation: -180,
  opacity: -5,
  scrollTrigger: {
    scrub: 0.3,
    markers: true,
    start: 'top top',
    end: 'bottom 90%',
  }
})
.to('.T', { 
  x: '2100px',
  y: '3000px',
  rotation: -180,
  opacity: -5,
  scrollTrigger: {
    scrub: 0.3,
    markers: true,
    start: 'top top',
    end: 'bottom 90%',
  }
})
.to('.R', { 
  x: '2500px',
  y: '3300px',
  rotation: -180,
  opacity: -5,
  scrollTrigger: {
    scrub: 0.3,
    markers: true,
    start: 'top top',
    end: 'bottom 90%',
  }
})
.to('.U', { 
  x: '2000px',
  y: '3300px',
  rotation: -180,
  opacity: -5,
  scrollTrigger: {
    scrub: 0.3,
    markers: true,
    start: 'top top',
    end: 'bottom 90%',
  }
})
.to('.B', { 
  x: '2800px',
  y: '3700px',
  rotation: -180,
  opacity: -5,
  scrollTrigger: {
    scrub: 0.3,
    markers: true,
    start: 'top top',
    end: 'bottom 90%',
  }
})
.to('.C', { 
  x: '3100px',
  y: '3000px',
  rotation: -180,
  opacity: -5,
  scrollTrigger: {
    scrub: 0.3,
    markers: true,
    start: 'top top',
    end: 'bottom 90%',
  }
})
