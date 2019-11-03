import React from "react";
import LinePlot from './LinePlot'

export default (props) => <LinePlot

width={600}
height={500}
bgColor = '#eee'
{...props}
/>

// Content that is given externally to StylizedLinePlot is given in props and spreaded by {... props}
// and then together with the other properties passed on to LinePlot