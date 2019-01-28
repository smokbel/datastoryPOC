let scrollInfo = {}
let heading = {}

// heading height is set so we can have a full width heading. We hide the viz section to achieve this
heading.height = document.querySelector('.heading').getBoundingClientRect().height

// for each section, return its offsetTop - which is the distance each element is
// from the top of the viewport - and place it into the sectionPositions array

let sectionPositions = []


let startPos = 0

let sections = document.querySelectorAll('.text')
sections.forEach((elm, i) => {
  let top = elm.getBoundingClientRect().top

  if (i === 0) {
    startPos = top
  }

  sectionPositions.push(top - startPos + heading.height)
})

console.log(sectionPositions)

// event dispatch
let dispatch = d3.dispatch('active', 'progress')

dispatch.on('active', lookupVizFunction)

// We set the current index to infinity to ensure that the sectionIndex can't be equal to it initially
let currentIndex = Infinity

function scrollListener(e) {
  let pos = window.pageYOffset - 10
  let sectionIndex = d3.bisect(sectionPositions, pos)
  //vsectionIndex = Math.min(sections.length - 1, sectionIndex)

  // this is so that the "viz" div only shows once the first section is scrolled to.
  //
  if (pos < heading.height) {
    document.querySelector("#viz").style.left = "200%"
  } else {
    document.querySelector("#viz").style.left = "50%"
  }

  if (currentIndex !== sectionIndex) {
    console.log('pos', pos)
    dispatch.call('active', this, sectionIndex)
    currentIndex = sectionIndex
  }


}

let arrayFunc = [
  ()=>{},
  logfunc1,
  logfunc2,
  logfunc3,
  logfunc4,
  logfunc5,
  logfunc6,
]


function lookupVizFunction(index) {
  d3.selectAll('rect')
    .transition("rectTransition")
    .duration(800)
    .style('opacity', 0)

  arrayFunc[index]()
}



document.addEventListener('scroll', scrollListener)
