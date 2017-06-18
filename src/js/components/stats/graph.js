import React from 'react';
import Trend from 'react-trend';

const Graph = () => (
  <Trend 
    smooth
    autoDraw
    autoDrawDuration={600}
    autoDrawEasing="ease-out"
    data={[0,1400,350,899,7500,800,110,1200,300]}
    //gradient={['#74ef52', '#f0b114']}
    stroke={'#74ef52'}
    radius={15}
    strokeWidth={4}
    strokeLinecap={'round'}
    height={90}
    fill={'green'}
    width={700}
  />
);

export default Graph;