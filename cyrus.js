let allElements = document.querySelectorAll(".main>pre>b");

let currentOpacity = parseFloat(window.getComputedStyle(allElements[0]).opacity);
console.log(currentOpacity)

setTimeout(()=>{
    setInterval(()=>{
        for (let index = 0; index < allElements.length; index++) {
            let currentOpacity  = parseFloat(window.getComputedStyle(allElements[index]).opacity)
            if(currentOpacity < 1){
                currentOpacity += 0.01;
                allElements[index].style.opacity = currentOpacity;
                console.log("done")
            }
            
        }
    },100)
}, 1000)