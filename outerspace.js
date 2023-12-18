
const space = [ 
    "space/ant.png","space/volcanoio.jpg", "space/spiralarms.jpg", "space/saturnrings.jpg", "space/galaxy.png",
    "space/ripple.jpg", "space/quasar.jpg", "space/optical.gif","space/hydrogen.jpg", "space/helix.jpg", "space/halo.jpg",
    "space/galaxy.jpg", "space/quasar.png", "space/debris.jpg","space/volcanoio.gif","space/deadstar.jpg", "space/blackwidow.jpg", "space/spider.png","space/ripple.png", "space/spiralgalaxy.jpg",
    "space/saturnrings.png","space/deadstar.png","space/debris.png","space/spiralgalaxy.png", "space/optical.jpg"
  ]
  
  
  
  
  let i = 0
  
  function placeImage(x,y) {
    const nextImage = space[i]
    
    const img = document.createElement("img")
    img.setAttribute("src", nextImage)
    img.style.left = x + "px"
    img.style.top = y + "px"
    img.style.transform = "rotate(" + (Math.random() * 20 - 10) + "deg)"
  
    document.body.appendChild(img)
  
    i = i + 1
  
    if (i>= space.length) {
      i = 0
    }
  }
  
  let mouse = 0
  
  document.addEventListener("mousemove", function (event) {
    event.preventDefault()
    mouse = mouse + 1
    if (mouse % 20 ==0) {
      placeImage(event.pageX, event.pageY)
    
    }
  })
  
  document.addEventListener("touchend", function (event) {
    event.preventDefault()
    placeImage(event.pageX, event.pageY)
  })