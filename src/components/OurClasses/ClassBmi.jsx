import React, { useEffect, useState } from "react";
import BMI from '../../images/bmi-index.jpg';
import arrow from '../../images/triangle-up.avif';

const ClassBMI = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [arrowPosition, setArrowPosition] = useState('translateX(250px');

    const calculateBMI = () => {
        if (height && weight) {
            const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
            setBmi(bmiValue);
            moveArrow(bmiValue);
        }
    };

    // Enter'a basıldığında BMI hesaplaması yap
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            calculateBMI();
        }
    };

    //BMI değerine göre oku hareket ettirme
    const moveArrow = (bmiValue) => {
        if (bmiValue < 18.5) {
            setArrowPosition('translateX(100px)');
        } else if (bmiValue >= 18.5 && bmiValue < 24.99) {
            setArrowPosition('translateX(200px)');
        } else if (bmiValue >= 25 && bmiValue < 29.99) {
            setArrowPosition('translateX(300px)');
        } else if (bmiValue >= 30 && bmiValue < 34.99) {
            setArrowPosition('translateX(400px)');
        } else {
            setArrowPosition('translateX(500px)');
        }
    };

    //Inputlar değiştikçe BMI hesaplama
    useEffect(() => {
        calculateBMI();
    }, [height, weight]);

    return (
        <div className="class-bmi">
            <div className="class-bmi-text">
            <h1>BMI Calculator</h1>
            <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
            <br /><br />
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </p> 
            <div className="bmi-inputs">
                <label htmlFor="height">
                    <input 
                         type="text"
                         id="height"
                         placeholder="Your Height"
                         value={height}
                         onChange={(e) => setHeight(e.target.value)}
                         onKeyDown={handleKeyDown}  // Enter tuşu dinleme
                         required
                         />
                         <span>cm</span>
                </label>
                <label htmlFor="weight">
                    <input 
                         type="text"
                         id="weight"
                         placeholder="Your Weight"
                         value={weight}
                         onChange={(e) => setWeight(e.target.value)}
                         onKeyDown={handleKeyDown}
                         required
                     />
                     <span>kg</span>
                </label>
            </div>
            </div>
            <div className="class-bmi-image">
                <h2>Your BMI</h2>
                <img src={BMI} alt="BMI Index" id="bmi-chart" />
                {bmi && (
                <p id="bmi-result"><span id="bmi-value">{bmi}</span>
                </p>
                )}
                <img src={arrow} alt="arrow-up" className="arrow-up" id="bmi-arrow" style={{ transform: arrowPosition}} />
            </div>
        </div>
    );
};

export default ClassBMI;