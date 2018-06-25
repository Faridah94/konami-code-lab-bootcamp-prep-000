const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

var index = 0

function init() {
  
  document.body.addEventListener('keydown', function(e){
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      index++
   
      if (index === code.length - 1) {
        index = 0
        alert("YOU DID IT!")
      }
    } else {
      index = 0
    }
  })
}