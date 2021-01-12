/*
 * @Author: Innei
 * @Date: 2021-01-10 18:35:02
 * @LastEditTime: 2021-01-12 12:52:09
 * @LastEditors: Innei
 * @FilePath: /rn-ppt/index.js
 * @Mark: Coding with Love
 */
import Reveal from "./script/reveal.esm"
import RevealHighlight from "./script/plugin/highlight/highlight.js"
Reveal.initialize({
  // mouseWheel: true,
  hash: true,
  touch: true,
  plugins: [RevealHighlight],
  slideNumber: true,
  // parallaxBackgroundImage: "./public/images/bg.jpg",
  // parallaxBackgroundHorizontal: 200,
  // parallaxBackgroundVertical: 50,
  // parallaxBackgroundSize: "2100px 900px"
})
Reveal.on("slidechanged", (event) => {
  const h = event.indexh
  const v = event.indexv
  if (h === 0 && v > 0) {
    document.body.classList.add("rn")
  } else {
    document.body.classList.remove("rn")
  }
})

document.onclick = (e) => {
  if (e.target.className === "slide-background-content") {
    Reveal.next()
  }
}

document.onwheel = (e) => {
  if (e.target.className === "slide-background-content") {
    e.deltaY > 0 ? Reveal.next() : Reveal.prev()
  }
}

// document.onkeydown = e => {
//   if (e.code == 'n') {
//     Reveal.slide()
//   }
// }
