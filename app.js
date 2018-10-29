document.addEventListener('DOMContentLoaded', function() {

  let currentColor = "red"
  let cells = document.querySelectorAll(".boardDiv")
  let board = document.querySelector('.board')


  let colors = document.querySelectorAll(".color")
  for (let color of colors) {
    color.addEventListener("click", function() {
      currentColor = color.id

    })
  }

  board.addEventListener("click", function(){
    event.target.style.backgroundColor= currentColor
  })

})
