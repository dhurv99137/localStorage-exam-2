let book = JSON.parse(localStorage.getItem("data")) || [];

const uidata = (e) => {
  e.preventDefault()

  let data = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    price: document.getElementById("price").value,
    category: document.getElementById("category").value,
    image: document.getElementById("image").value
  }
  book.push(data);
  localStorage.setItem("data", JSON.stringify(book));
}

document.getElementById("formData").addEventListener("submit", uidata);

