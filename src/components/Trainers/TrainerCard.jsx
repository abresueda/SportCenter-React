import React from "react";
import "./Trainers.css";

const TrainerCard = ({ data, isTrainer }) => {
    return (
        <div className="card">
            <div className="image-wrapper">
                {/*Eğitmen veya ürün resmini göstermek için.*/}
                <img src={data.imgSrc} alt={isTrainer ? `${data.name}` : `${data.product}`} />
            </div>
            {/* isTrainer true ise eğitmen bilgilerini, değilse ürün bilgilerini gösteriyoruz.*/}
            {isTrainer ? (
                <p className="trainer-name">
                    {data.name} <br /> {data.title}
                </p>
            ) : (
                <p className="purchase-name">
                    {data.product} <br /> <span className="underline">{data.price}</span> <br />
                    <i className="fas fa-shopping-cart"></i> Add To Cart
                </p>
            )}
        </div>
    );
};

export default TrainerCard;