const D3Node = require('d3-node')
const hzd3 = require('hz-d3')
const data =require('./data/data')

const d3n = new D3Node()      // initializes D3 with container element
const svg = d3n.createSVG(500, 500) // create SVG w/ 'g' tag and width/height

class Force extends hzd3.Force {
  constructor (ele, options) {
    super(ele, options)
  }

  bind () {
    console.log('bind')
  }
}
const force = new Force(svg, {
  data: data.graph.data,
  width: 500,
  height: 500,
  onEndRender: () => {
    console.log('end')
    require('./lib/output')('graph', d3n)
  }
})
force.init()
