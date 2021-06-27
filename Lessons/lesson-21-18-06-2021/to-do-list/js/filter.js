const sel = document.getElementById("filter-select");

sel.addEventListener(
  "click",
  function (el) {
    let options = this.children;
    for (let i = 0; i < this.childElementCount; i++) {
      options[i].style.color = "black";
    }
  },
  false
);
