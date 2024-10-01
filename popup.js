

let button = document.getElementById("button")



button.onclick = () => {
  if(chrome.runtime){
    tips.textContent = "AAAAAAAAA"
  } else {
    tips.textContent = "BBBBBBBBB"
  }
}
