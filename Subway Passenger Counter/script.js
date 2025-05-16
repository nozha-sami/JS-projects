let count = 0
let totalPeople = 0
let saveEl = document.getElementById("save")
let countEl = document.getElementById("count")
let totalEl = document.getElementById("totalPeople")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = "<div>" + count + " </div> "
    saveEl.innerHTML += countStr
    countEl.textContent = 0
    totalPeople = totalPeople + count
    totalEl.textContent = totalPeople
    count = 0
}

console.log("Let's count people on the subway!")
