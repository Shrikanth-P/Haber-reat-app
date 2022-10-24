import React, { Component } from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class Footer extends Component {
    state = { details: [] }
    componentDidMount() {
        axios.get('https://fakestoreapi.com/products').then(
            res => {
                const details = res.data;
                this.setState({ details });
            }
        )
    }

render()
{
    return(

        <div className="row" style={{ margin:20,textAlign:"center"}}>
          <h2 style={{color:"orange"}}>Cards Fetched using Axios concepts with fake API </h2>
            {this.state.details.filter(details=>details.id<15).map(det =>
                <div className="col" key={det.id}>
                    <div className="card" style={{ }}>
                        <div className="card-body" style={{width:250,textAlign:"center"}}>
                            <img src={det.image} style={{ height: 100, width: 100 ,textAlign:"center"}}></img>
                            <hr></hr>
                            <h6 >{det.title}</h6>
                            <hr></hr>
                            <h3>₹ {det.price}</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>



    )
}
}