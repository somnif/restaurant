import foodImage from "../media/food.jpg"

const innerText = `Kia ora, Welcome to Pio Pio \n
                We are incredibly proud to present our menu using the South Islands finest and most exclusive ingredients made extraordinary through commitment to full flavour, culinary technique, and locally sourced product.
                \n
                Our 100% hand-crafted elements of smoke, spice, sweet and sour combined with a range of clever French inspired cooking techniques transforms and elevates simple NZ local ingredients to full  flavoured dishes layered with care that will spark conversation at your table.
                \n
                This menu is an opportunity to be curious and adventurous, try something new and be delighted with your find.
                \n
                We hope you enjoy this menu as much as we have enjoyed creating it.
                \n
                The Team`

const textNode = document.createTextNode(innerText)
const textContainer = document.createElement('div')
textContainer.append(textNode)

const food = new Image() 
food.src = foodImage;

const innerHTML = document.createElement('div')
innerHTML.classList.add("content-inner")
innerHTML.appendChild(food)
innerHTML.appendChild(textContainer)

export default innerHTML;