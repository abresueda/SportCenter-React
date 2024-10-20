import React from "react";
import './Reviews.css';

//Client bileşeni, data prop'unu alır. Data prop'u Review bileşeninden gelen müşteri bilgilerini içerir.
const Client = ({ data }) => {
    return (
        <div className="client">
            <div className="client-header">
                <img src={data.imgSrc} alt={data.name} />
                <h4>{data.name} <br /> {data.title}</h4>
            </div>
            <div className="client-review">
                <p>{data.review}</p>
            </div>
        </div>
    );
};

export default Client;