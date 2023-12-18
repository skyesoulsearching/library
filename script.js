const images = [ 
  "images/quilt1.png","images/blinking.gif","images/quilt3.png", "images/kubo.png", "images/paragraph.png", "images/3D_shape.png","images/libai.png",
"images/quiltcreature.png", "images/chinese.png","images/floral.png", "images/books.png", "images/launch.gif",
"images/journal.png", "images/pink.png", "images/blackwidow.png", "images/3D.png","images/writing.png", "images/quilt2.png","images/yellowFL.png", "images/lighthousesunrise.png",
 "images/microscope.png", "images/kubo.png","images/light.png", "images/kubo.png", "images/scribe.png", "images/skull.png", "images/blinking.gif", 
 "images/giovanni.png", "images/next_paragraph.png","images/layeredquilt.png", "images/kubobutterflies.png", "images/violin.png", "images/lighthouse.png"
]




let i = 0

function placeImage(x,y) {
  const nextImage = images[i]
  
  const img = document.createElement("img")
  img.setAttribute("src", nextImage)
  img.style.left = x + "px"
  img.style.top = y + "px"
  img.style.transform = "rotate(" + (Math.random() * 20 - 10) + "deg)"

  document.body.appendChild(img)

  i = i + 1

  if (i>= images.length) {
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
