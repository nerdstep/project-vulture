import React, { Component } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import ExampleChart from './ExampleChart'
import ExampleList from './ExampleList'
import Box from './Box'
import './Grid.css'


const ResponsiveGrid = new WidthProvider(Responsive)

const layouts = {
  xl: [
    { i: '1', x: 0, y: 0, w: 4, h: 4 },
    { i: '2', x: 4, y: 0, w: 4, h: 2 },
    { i: '3', x: 8, y: 0, w: 4, h: 1 }
  ],
  lg: [
    { i: '1', x: 0, y: 0, w: 4, h: 4 },
    { i: '2', x: 4, y: 0, w: 2, h: 2 },
    { i: '3', x: 0, y: 0, w: 4, h: 1 }
  ],
  md: [
    { i: '1', x: 0, y: 0, w: 2, h: 4 },
    { i: '2', x: 2, y: 0, w: 2, h: 2 },
    { i: '3', x: 0, y: 1, w: 2, h: 1 }
  ],
  sm: [
    { i: '1', x: 0, y: 0, w: 4, h: 4 },
    { i: '2', x: 1, y: 0, w: 1, h: 2 },
    { i: '3', x: 0, y: 1, w: 1, h: 1 }
  ],
  xs: [
    { i: '1', x: 0, y: 0, w: 1, h: 4 },
    { i: '2', x: 0, y: 0, w: 1, h: 2 },
    { i: '3', x: 0, y: 0, w: 1, h: 1 }
  ]
}

class Grid extends Component {
  handleLayoutChange = (layout, allLayouts) => {
    console.log(layout, allLayouts)
  };

  render() {
    return (
      <ResponsiveGrid
        className="grid-layout"
        layouts={layouts}
        margin={[32,32]}
        rowHeight={32 + 40}
        breakpoints={{xl: 1920, lg: 1200, md: 768, sm: 512, xs: 0}}
        cols={{xl: 12, lg: 6, md: 4, sm: 2, xs: 1}}
        onLayoutChange={this.handleLayoutChange}>
        <div key={1}><ExampleChart /></div>
        <div key={2}><ExampleList /></div>
        <div key={3}><Box>Empty</Box></div>
      </ResponsiveGrid>
    )
  }
}

export default Grid
