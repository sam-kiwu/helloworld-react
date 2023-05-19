import React from 'react';
import "./card.css";


const Card = (props) =>{
    return (
        <div className='card-border'>
            <div className='over-flow' >
                <img src={props.imgsrc} alt=" first image" className='card-img-top'/>
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>CHIHUAHAU</h4>
                <p>
                    <div className="btn">
                        <button className='btnOne'>
                            <h6>
                                $15000
                            </h6>
                        </button>
                    </div>
                    
                     </p>
                     <a href="#" className='chart'>Add to Cart</a>
            </div>
        </div>
    );
};

export default Card;