let myLeads = [ "www.fantastic.com", "www.my house .com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("button-el")
const ulEl = document.getElementById("ul-el")
inputBtn.addEventListener("click",function buttonEl() {
    "button clicked"
    myLeads.push(inputEl.value)
    renderLeads()
})
function  renderLeads(){
   let listItems = " "
    for (i = 0; i < myLeads.length; i+= 1){
        listItems+= "<li>" + myLeads[i] +"</li>"
            
        }
ulEl.innerHTML =  listItems
}

