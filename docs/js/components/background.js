const imgNum = 4
const randomImg = Math.floor(Math.random() * imgNum)

function loadImage(e) {
  e.target.classList.remove('invisible')
  e.target.classList.add('bgImage')
}

export function backgroundImage() {
  const image = new Image()
  image.src = `img/${randomImg+1}.jpg`
  image.classList.add('invisible')
  document.body.prepend(image)
  image.addEventListener('load', loadImage)
}