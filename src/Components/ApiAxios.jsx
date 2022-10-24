import React, { Component } from "react";
import axios from "axios";
;

export default class Footer extends Component {
    state = { details: [] }
    componentDidMount() {
        axios.get('https://fakestoreapi.com/products/category/jewelery').then(
            res => {
                const details = res.data;
                this.setState({ details });
            }
        )
    }

render()
{
    return(
        <div className="row">
          <h2  style={{textAlign:"center",color:"orange",margin:10}}>Cards Fetched using .Net core API </h2>
            {this.state.details.filter(details=>details.id>3).map(det =>
                <div className="col" key={det.id}>
                    <div className="card" style={{height: 300, width:250,textAlign:"center" }}>
                        <div className="card-body" style={{width:250 ,textAlign:"center"}}>
                            <img src={det.image} style={{ height: 100, width: 100}}></img>
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