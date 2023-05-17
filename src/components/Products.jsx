import React from 'react';
import "./card.css";

const Card = (props) =>{
    return (
        <div className='card text-center mb-3'>
            <div className='overflow'>
                <img src={props.imgsrc} alt=" first image" className='card-img-top' />
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>Samson's success Card</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Veniam hic error corrupti
                     quconsequatur nulla asperiores quas enim quasi error perferendis.
                     </p>
                     <a href="#">Add to Cart</a>
            </div>
        </div>
    );
};

export default Card;