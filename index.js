const pianoKeys = document.querySelectorAll(".key")
const showKeys = document.getElementById("show-keys")
const volumeSlider = document.getElementById("volume-slider")

function playSound(soundUrl){
  const audioEl = new Audio(soundUrl)
  audioEl.volume = volumeSlider.value
  audioEl.play()
}

pianoKeys.forEach((pianoKey, i )=> {
  const number = i < 10 ? '0'+ (i+1) : (i+1)
  const soundUrl = `24-piano-keys/key${number}.mp3`
  pianoKey.addEventListener("click", ()=> playSound(soundUrl))
})

document.addEventListener("keydown", playWithKeyboard)
showKeys.addEventListener("change", addKeys)

function addKeys(e){
  if(e.target.checked){
    pianoKeys.forEach(eachkey => {
      eachkey.innerText = eachkey.dataset.key
      eachkey.setAttribute("id", "key-name-style")
    })
  } else {
    pianoKeys.forEach(eachkey => {
      eachkey.innerText = ""
    })

  }
}

function playWithKeyboard(e){
    const keyPressed = e.key   //grab the pressed key name
    const pressedPianoKey = document.querySelector(`.key[data-key="${keyPressed}"]`) //find the piano key
    if(pressedPianoKey){
      const number= Array.from(pianoKeys).indexOf(pressedPianoKey) +1  // create an array of all the piano keys and then search for the index of pressed piano key
      const soundUrl = `24-piano-keys/key${number < 10? "0" + number : number}.mp3`
      playSound(soundUrl)
      
    }

    pressedPianoKey.setAttribute("id", "active-key")
    setTimeout(()=>{
    pressedPianoKey.removeAttribute("id")
    },100)
       /*
  OR
   
     const letterToNumber = {
      "w":"01", "e":"02", "t":"03", "z":"04", "u":"05", "o":"06", "p":"07", "ü":"08", "a":"09", "s":"10", 
      "d":"11", "f":"12", "g":"13", "h":"14", "j":"15", "k":"16", "l":"17", "ö":"18", "ä":"19"
    }  
    if(letterToNumber.hasOwnProperty(keyPressed)) {
      const number = letterToNumber[keyPressed]   //convert the pressed key to number via object
      const soundUrl = `24-piano-keys/key${number}.mp3`
      playSound(soundUrl)
    }
*/

  }
   
  
