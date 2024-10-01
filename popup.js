

let button = document.getElementById("button")



button.onclick = () => {
  try {
    console.log(chrome.runtime.aaa)
    tips.textContent = "AAAAAAAAA"
  } catch(err){
    tips.textContent = "BBBBBBBBB"
  }
}
