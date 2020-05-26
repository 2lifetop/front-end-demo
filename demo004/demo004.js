let boxs = document.querySelectorAll('.box')
for (let i = 0; i < boxs.length; i++) {
    boxs[i].onmouseenter = function (e) {
        let hovers = boxs[i].querySelector('.hover')
        hovers.classList.add('animation')
        hovers.style.width = this.offsetWidth + "px"
        hovers.style.height = this.offsetWidth + "px"
        hovers.style.top = -(this.offsetHeight - e.offsetY) + "px"
        hovers.style.left = -(this.offsetWidth / 2 - e.offsetX) + "px"
        setTimeout(function () {
            hovers.classList.remove("animation")
        }, 500)

    }
}