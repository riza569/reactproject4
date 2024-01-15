import React from 'react'
import data from './data'
import Card from './component/card'
import Nav from './component/nav'
import './style.css'
export default function App(){
    const main=data.map((x)=>(
        <Card 
        {...x}
        />
    ))
return(
    <div>
<Nav/>
<div className='main'>
{main}
</div>
    </div>
);
 }
