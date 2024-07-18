import menuItems from "./menuItems"

const innerHTML = document.createElement('div')
innerHTML.classList.add("content-inner")

const innerNavBar = document.createElement("div")
innerNavBar.classList.add("inner-nav")

const textContainer = document.createElement("div")

const coursesList = [];


class Course {
    static changeCourse = (name) => {
        textContainer.innerHTML = ""
        textContainer.appendChild(generateInnerText(name))
        console.log(`Changing course to ${name}.`)
    }

    constructor(name) {
        this.name = name;
        this.buttonElement = document.createElement("button")
        this.buttonText = document.createTextNode(this.name.toUpperCase())
        this.buttonElement.appendChild(this.buttonText)
        this.buttonElement.addEventListener("click", () => {
            this.constructor.changeCourse(name);
            coursesList.forEach((course) => {
                course.deselect();
            });
            this.select();
        })
        innerNavBar.appendChild(this.buttonElement)
    }

    deselect() {
        this.buttonElement.classList.remove("active")
    }

    select() {
        this.buttonElement.classList.add("active")
    }
}

const generateInnerText = (name) => {
    const returnAllText = document.createElement("div")
    const items = menuItems[name]
    items.forEach((item) => {
        const returnItemText = document.createElement("div")

        const titleWrapper = document.createElement("span")
        titleWrapper.classList.add("bold")

        const descriptionWrapper = document.createTextNode(` - ${item["Description"]}`)

        const dietaryWrapper = document.createElement("span")
        dietaryWrapper.classList.add("italic")

        const priceWrapper = document.createElement("span")
        priceWrapper.classList.add("bold")

        titleWrapper.appendChild(document.createTextNode(item["Dish Name"]))
        dietaryWrapper.appendChild(document.createTextNode(` (${item["Dietaries"].join(", ")})`))
        priceWrapper.appendChild(document.createTextNode(`${item["Price"]} \n`))

        returnItemText.appendChild(titleWrapper)
        if (item["Description"]){
            returnItemText.appendChild(descriptionWrapper)
        }
        returnItemText.appendChild(dietaryWrapper)
        returnItemText.appendChild(priceWrapper)
        returnItemText.classList.add("menu-item")
        returnAllText.appendChild(returnItemText)
    })

    return returnAllText;
}

Object.keys(menuItems).forEach((key) => {
    coursesList.push(new Course(key))}
);

coursesList[0].select();
Course.changeCourse(coursesList[0].name)

innerHTML.appendChild(innerNavBar)
innerHTML.appendChild(textContainer)

export default innerHTML