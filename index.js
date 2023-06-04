let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("button-el")
const ulEl = document.getElementById("ul-el")
inputBtn.addEventListener("click",function buttonEl() {
    "button clicked"
    myLeads.push(inputEl.value)
    inputEl.value = "  "
    localStorage.setItem("myLeads ",JSON.stringify(myLeads))
    renderLeads()
})

let fromlocalStorage =JSON.parse (localStorage.getItem("myLeads"))
console.log(fromlocalStorage)
function  renderLeads(){
   let listItems = " "
    for (i = 0; i < myLeads.length; i+= 1){
        listItems+= 
        `<li>
            <a  target='_blank' href=" ${myLeads[i]}">
            ${myLeads[i]}
            </a>
          
        </li>`
            
        }
ulEl.innerHTML =  listItems
}

