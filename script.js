const urlElement = document.querySelector("#form1")
const textTopElement = document.querySelector('#form2')
const textBottomElement = document.querySelector('#form3')
const input1 = document.querySelector('#box1')
const input2 = document.querySelector('#box2')
const input3 = document.querySelector('#box3')
const memeButton = document.querySelector("#memeButton")
const holdEm = document.querySelector(".container")
const docBody = document.querySelector("#kudaBody")






memeButton.addEventListener('click',  function(evt){

    evt.preventDefault()
    
    const picTopText = document.createElement("div")
    const picBottomText = document.createElement("div")
    const pic = document.createElement('img')
    const imgDiv = document.createElement("div")

    imgDiv.classList.add("imgDivs")
    pic.classList.add("pic")
    picTopText.classList.add("topText")
    picBottomText.classList.add("bottomText")
 

    pic.src = input1.value
    picTopText.innerText = input2.value
    picBottomText.innerText = input3.value

    holdEm.append(imgDiv)
    imgDiv.append(picTopText)

    
    picTopText.after(pic)
    pic.after(picBottomText)

    urlElement.reset()
    textTopElement.reset()
    textBottomElement.reset()


    goodBye()





})

 docBody.addEventListener("keypress", function(event){

    if (event.keyCode === 13){
    
    
        event.preventDefault()
        document.getElementById("memeButton").click()
    
    }
    
    
})
    
   
function goodBye(){

const deletePic = document.querySelectorAll(".imgDivs")

for( let i = 0; i<deletePic.length;  i++){

deletePic[i].addEventListener("click", function(event){

   

    deletePic[i].remove()




})

}
}