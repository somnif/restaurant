import './styles/style.css'
import home from "./pages/home.js"
import menu from "./pages/menu.js"
import about from "./pages/about.js"

const navigation = function () {
    const navBar = [home, menu, about];
    const getNavItem = (index) => {
        return navBar[index]
    }
    return { getNavItem };
}();

const contentBox = document.querySelector("#content")
const navButtons = document.querySelectorAll("nav>button")

navButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        makePage(navigation.getNavItem(index))
        navButtons.forEach((button) => {
            button.classList.remove("active")
        })
        button.classList.add("active")
    })
})

const makePage = (pageName) => {
    contentBox.innerHTML = ""
    contentBox.appendChild(pageName)
}

contentBox.appendChild(home)