document.addEventListener('DOMContentLoaded', function() {

  let currentColor = "red"
  let cell = document.querySelector(".boardDiv")
  let board = document.querySelector('.board')


  let colors = document.querySelectorAll(".color")
  for (let color of colors) {
    color.addEventListener("click", function() {
      currentColor = color.id
    })
  }


  cell1.addEventListener("click", function(event) {
    cell1.style.backgroundColor = currentColor
    console.log(currentColor)
  })

  cell2.addEventListener("click", function(event) {
    cell2.style.backgroundColor = currentColor
    console.log(currentColor)
  })

  cell3.addEventListener("click", function(event) {
    cell3.style.backgroundColor = currentColor
    console.log(currentColor)
  })

  cell4.addEventListener("click", function(event) {
    cell4.style.backgroundColor = currentColor
    console.log(currentColor)
  })



})
