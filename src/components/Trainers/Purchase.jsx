import React from "react";
import TrainerCard from "./TrainerCard";
import Purchase1 from "../../images/purchase1.jpg";
import Purchase2 from "../../images/purchase2.jpg";
import Purchase3 from "../../images/purchase3.jpg";
import Purchase4 from "../../images/purchase4.jpg";
import "./Trainers.css";

const Purchase = () => {
   //Ürün bilgilerini içeren array
   const purchaseData = [
    { id:1, product: "Kettlebell / 5 kg", price: "59,99$", imgSrc: Purchase1},
    { id:2, product: "Treadmill", price: "599,99$", imgSrc: Purchase2},
    { id:3, product: "Adjustable Dumbbell", price: "59,99$", imgSrc: Purchase3 },
    { id: 4, product: "Kettlebell / 3kg", price: "59,99$", imgSrc: Purchase4 }
  ];

  return (
    <section className="purchase-container">
        <h1>PURCHASE FROM US</h1>
        <p className="purchase-description">
        Lorem ipsum is not simply random text. It has roots in classical literature.
        </p>
        <div className="purchase-card-container">
            {/* purchaseData array'ini geziyoruz ve her öğeyi Card componentine aktarıyoruz.*/}
            {purchaseData.map((item) => (
                <TrainerCard key={item.id} data={item} isTrainer={false} />
            ))}
        </div>
    </section>
  );
};

export default Purchase;