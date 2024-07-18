import milford from "../media/milford.webp"

const innerText = `Piopio restaurant is located in Milford Sound.
\n
Milford Sound, nestled in the heart of Fiordland National Park, is like stepping into a real-life postcard. Imagine towering cliffs, lush rainforests, and waterfalls that seem to tumble from the sky. This place is so stunning that Rudyard Kipling once called it the "eighth Wonder of the World." Whether you're cruising through its deep, dark waters or hiking along its scenic trails, Milford Sound offers a slice of untouched beauty that's hard to find anywhere else.
\n
Getting to Milford Sound is an adventure in itself. The drive from Te Anau or Queenstown is packed with jaw-dropping views, from the reflective Mirror Lakes to the dramatic Homer Tunnel. Once you arrive, you might spot playful dolphins, seals lounging on rocks, or even the rare Fiordland crested penguin. It's no wonder Milford Sound is a must-visit on any New Zealand itinerary – it's nature at its most dramatic and awe-inspiring.
\n
Find out more about Milford Sound Lodge at:- `

const link = document.createElement('a')
link.appendChild(document.createTextNode("Milford Sound Lodge"))
link.title = "Milford Sound Lodge";
link.href = "https://www.milfordlodge.com/";

const textNode = document.createTextNode(innerText)
const textContainer = document.createElement('div')
textContainer.append(textNode)
textContainer.append(link)

const milfordImage = new Image() 
milfordImage.src = milford;

const innerHTML = document.createElement('div')
innerHTML.classList.add("content-inner", "inverted")
innerHTML.appendChild(textContainer)
innerHTML.appendChild(milfordImage)


export default innerHTML;