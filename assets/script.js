

let yourName = "Tyler Goldsmith" 

let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

document.getElementById('credit').textContent = `Created by ${yourName}`

//GB
// +
document.getElementById('add-gb').addEventListener('click', function(e){
    gb++
})

//GB
// -
document.getElementById('minus-gb').addEventListener('click', function() {
    gb--
})` q`

// CC
// +
document.getElementById('add-cc').addEventListener('click', function() {
    cc++

})

// CC
// -
document.getElementById('minus-cc').addEventListener('click', function() {
    cc--
})

// Sugar
// +
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar++
})

//Sugar
// -
document.getElementById('minus-sugar').addEventListener('click', function() {
    sugar--   
})




localStorage.setItem(gb,'#qty-gb')
localStorage.setItem(cc,'#qty-cc')
localStorage.setItem(sugar,'qty-sugar')

console.log(gb)
console.log(cc)
console.log(sugar)