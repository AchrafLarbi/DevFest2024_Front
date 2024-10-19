import React from 'react';
import { ResponsiveTree } from '@nivo/tree';

const data = {
  name: "MANAGER",
  color: "hsl(200, 70%, 50%)",
  children: [
    {
      name: "ROUTER",
      color: "hsl(150, 70%, 50%)",
      children: [
        {
          name: "Pc1 (192.168.1.1)",   
          color: "hsl(50, 70%, 50%)",
        },
        {
          name: "Pc2 (192.168.1.2)",  
          color: "hsl(60, 70%, 50%)",
        },
        {
          name: "Pc3 (192.168.1.3)",  
          color: "hsl(70, 70%, 50%)",
        },
        {
          name: "Pc4 (192.168.1.4)",  
          color: "hsl(80, 70%, 50%)",
        },
        {
          name: "Pc5 (192.168.1.5)",  
          color: "hsl(90, 70%, 50%)",
        },
      ]
    }
  ]
};

const MyResponsiveTree = ({ data /* see data tab */ }) => (
    <ResponsiveTree
        data={data}
        identity="name"
        mode="tree"
        layout="left-to-right"
        nodeSize={20}
        activeNodeSize={40}
        inactiveNodeSize={20}
        nodeColor={{ scheme: 'tableau10' }}
        fixNodeColorAtDepth={5}
        linkCurve="linear"
        linkThickness={5}
        activeLinkThickness={10}
        inactiveLinkThickness={2}
        linkColor="#f1f1f1"
        labelOffset={21}
        margin={{ top: 20, right: 200, bottom: 20, left: 100 }}
        motionConfig="stiff"
        meshDetectionRadius={80}
    />
);
function Topology() {
  return (  
    <div className='w-[90%] h-[70%] flex justify-center'>
      <MyResponsiveTree data={data}/>
    </div>
  );
}

export default Topology;
