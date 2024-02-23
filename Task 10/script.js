items = document.querySelectorAll("#itemList li");

items.forEach(item => {
    item.addEventListener("mouseover", function () {
        this.style.color = "#007bff";
    });

    item.addEventListener("mouseout", function () {
        this.style.color = "";
    });
});