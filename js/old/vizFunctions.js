let svgContainer = d3.select('#viz')
  .append('svg')
  .attr('width', 800)
  .attr('height', 800)


let rectArr = [{
    name: 'rect1',
    x: 0,
    y: 0,
    fill: '#FF0000'
  },
  {
    name: 'rect3',
    x: 0,
    y: 200,
    fill: '#0000FF'
  },
  {
    name: 'rect5',
    x: 100,
    y: 100,
    fill: '#00FFFF'
  },
  {
    name: 'rect2',
    x: 10,
    y: 20,
    fill: 'green',
    width: 200
  },
  {
    name: 'rect4',
    x: 50,
    y: 10,
    fill: 'orange',
    width: 400,
    height: 100
  },
  {
    name: 'rect6',
    x: 0,
    y: 70,
    fill: 'black',
    height: 400
  }
]

let rectD3Arr = []
rectArr.forEach((rect) => {
  let temp = svgContainer.append("rect")
    .attr('width', 50)
    .attr('height', 100)
    .attr('x', rect.x)
    .attr('y', rect.y)
    .attr('fill', rect.fill)

  rectD3Arr.push(temp)
})

// define transitions when you call it, not above

function logfunc1() {
  rectD3Arr[0]
	.transition("rectTransition")
	.duration(800)
	.style('opacity', 1)
}

function logfunc2() {
  rectD3Arr[1]
	.transition("rectTransition")
	.duration(800)
	.style('opacity', 1)
}

function logfunc3() {
  rectD3Arr[2]
	.transition("rectTransition")
	.duration(800)
	.style('opacity', 1)
}

function logfunc4() {
  rectD3Arr[3]
	.transition("rectTransition")
	.duration(800)
	.style('opacity', 1)
}

function logfunc5() {
  rectD3Arr[4]
	.transition("rectTransition")
	.duration(800)
	.style('opacity', 1)
}

function logfunc6() {
  rectD3Arr[5]
	.transition("rectTransition")
	.duration(800)
	.style('opacity', 1)
}
