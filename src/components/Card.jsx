import React, {Component} from 'react';
import Card from './Products';
// import img1 from './products'
import navbar from "./Navbar"

import chihua1 from "../assets/Husky.jpg"
import chihua2 from "../assets/chihuahua.jpg"
import chihua3 from "../assets/chiwa.jpg"
import chihua4 from "../assets/chiwawa.jpg"


class Cards extends Component


{
    render(){
        return(
            <div className='container-fluid d-flex justify-content-center'>
                
                <div className='row g-3'>
                    <div className='col-md-3'>
                        <Card imgsrc={chihua4}/>
                    </div>
                    <div className='col-md-3'>
                        <Card imgsrc={chihua4}/>
                    </div>
                    <div className='col-md-3'>
                        <Card imgsrc={chihua4}/>
                    </div>
                    <div className='col-md-3'>
                        <Card imgsrc={chihua4}/>
                    </div>
                    <div className='col-md-3'>
                        <Card imgsrc={chihua4}/>
                    </div>
                    <div className='col-md-3'>
                        <Card imgsrc={chihua4}/>
                    </div>
                    <div className='col-md-3'>
                        <Card imgsrc={chihua4}/>
                    </div>
                    <div className='col-md-3'>
                        <Card imgsrc={chihua4}/>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards