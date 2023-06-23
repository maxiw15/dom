arr = Array.from(document.getElementsByClassName("font-size"))
arr.forEach(size => size.addEventListener('click', click))
let temp
function click(){
    document.getElementsByClassName("font-size_active")[0].classList.remove("font-size_active")
    event.preventDefault()
    if (this.classList.value==="font-size font-size_small") {temp = "book book_fs-small"}
    if (this.classList.value==="font-size") {temp = "book"}
    if (this.classList.value==="font-size font-size_big") {temp = "book book_fs-big"}
    this.classList.add("font-size_active")
    document.getElementById("book").classList = temp
}