const buy = JSON.parse(localStorage.getItem("cart")) || [];

const uimaker = (buy) => {
    document.getElementById("container").innerHTML = "";
    buy.forEach((ele, index) => {
        let title = document.createElement("h5");
        title.innerHTML = ele.title;
        let description = document.createElement("p");
        description.innerHTML = ele.description;
        let price = document.createElement("h5");
        price.innerHTML = ele.price;
        let category = document.createElement("h6");
        category.innerHTML = ele.category;
        let img = document.createElement("img");
        img.src = ele.image;

        let ott = document.createElement("button");
        ott.innerHTML = "Cart";
        ott.addEventListener("click", () => {
            buy.push(ele);
            localStorage.setItem("cart", JSON.stringify(buy));
        });

        let div = document.createElement("div");
        div.append(img, title, description, price, category, ott);
        document.getElementById("container").append(div);
    });
};

uimaker(buy);
