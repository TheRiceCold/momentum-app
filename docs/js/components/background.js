const imgNum = 4
const randomImg = Math.floor(Math.random() * imgNum)

export function backgroundImage() {
  // const img = document.createElement('img')
  const img = new Image()
  img.src = `img/${randomImg+1}.jpg`
  img.className = 'bgImage'
  document.body.prepend(img)
}