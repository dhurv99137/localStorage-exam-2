let book = JSON.parse(localStorage.getItem("data")) || [];
let buy=[]
const uimaker = (book) => {
    document.getElementById("container").innerHTML = ""
    book.map((ele, index) => {
        let title = document.createElement("h5")
        title.innerHTML = ele.title
        let description = document.createElement("p")
        description.innerHTML = ele.description
        let price = document.createElement("h5")
        price.innerHTML = ele.price
        let category = document.createElement("h6")
        category.innerHTML = ele.category
        let img = document.createElement("img")
        img.src = ele.image
        let btt = document.createElement("button")
        btt.innerHTML = "Delete"
        btt.addEventListener("click", () => {
            book.splice(index, 1);
            localStorage.setItem("data", JSON.stringify(book)); 
            uimaker(book);
        })

        let ott = document.createElement("button")
        ott.innerHTML = "Buy"
        ott.addEventListener("click", () => {
           buy.push(ele)
           localStorage.setItem("cart",JSON.stringify(buy))
        })

        let div = document.createElement("div")
        div.append(img, title, description, price, category, btt, ott)
        document.getElementById("container").append(div)
    });
}
uimaker(book)

// sorting
const sortingdata = () => {
    book.sort((a, b) => a.price - b.price)
    uimaker(book)
}
const datasorting = () => {
    book.sort((a, b) => b.price - a.price)
    uimaker(book)
}
// filter
const filter = (val) => {
    let temp = book.filter((ele) => ele.category == (val))
    uimaker(temp)
}
// search
const datasearch = (val) => {
    let temp = book.filter((ele) => ele.title == (val))
    uimaker(temp)
}
const searchdata = (e) => {
    e.preventDefault()
    let val = document.getElementById("val").value
    datasearch(val)
}
// sorting
document.getElementById("low").addEventListener("click", sortingdata)
document.getElementById("high").addEventListener("click", datasorting)
// filter
document.getElementById("History").addEventListener("click", () => filter("History"))
document.getElementById("Cooking").addEventListener("click", () => filter("Cooking"))
document.getElementById("science").addEventListener("click", () => filter("science"))
document.getElementById("Arts").addEventListener("click", () => filter("Arts & Music"))
// search
document.getElementById("search").addEventListener("submit", searchdata)





