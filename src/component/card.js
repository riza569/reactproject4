import React from 'react'
const Card=(props)=>{
    return(
        <div className='card'>
            <div className='card--left'>
                <img className='card--image'src={props.image}/>
             </div>
        
        <div className='card--right'>
            <div className='card--right--location'>
                     <span className='card--location'>{props.location}</span>
                    <a href={props. googlemapurl} className='google--map'>View on Google Maps</a>
            </div>

                     <h1 className='card--right--heading'>{props.title}</h1>

                <div className='card--right--content'>
                    <h4>{props.startdate} - {props.enddate}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
     
        
    );
}
export default Card