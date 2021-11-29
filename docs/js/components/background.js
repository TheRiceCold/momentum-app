const imgNum = 4
const randomImg = Math.floor(Math.random() * imgNum)

function handleImageLoad(event) {
  event.target.classList.remove('invisible')
  event.target.classList.add('bgImage')
}

export function backgroundImage() {
  const image = new Image()
  image.src = `images/${randomImg + 1}.jpg`
  image.classList.add('invisible')
  document.body.prepend(image)
  image.addEventListener('load', handleImageLoad)
}