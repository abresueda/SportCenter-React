import React from 'react';
import TrainerCard from './TrainerCard';
import Trainer1 from '../../images/trainer1.jpg';
import Trainer2 from '../../images/trainer2.jpg';
import Trainer3 from '../../images/trainer3.jpg';
import './Trainers.css';

const Trainers = () => {
    //Eğitmenlerin bilgilerini içeren array.
    const trainersData = [
        { id:1, name: "Alice Smith", title: "Yoga Trainer", imgSrc: Trainer1},
        { id:2, name: "John Smith", title: "Fitness Trainer", imgSrc: Trainer2},
        { id:3, name: "Jane Doe", title: "Cardio Trainer", imgSrc: Trainer3}
    ];

    return (
        <section className='trainers' id='trainers'>
            <div className="trainers-container">
                <h1>OUR BEST TRAINERS</h1>
                <p className="trainers-description">
                    Lorem ipsum is not simply random text. It has roots in classical literature.
                </p>
                <div className="card-container">
                    {/* trainersData array'ini geziyor ve Card componentine gönderiyoruz.*/}
                    {trainersData.map((trainer) => (
                        <TrainerCard key={trainer.id} data={trainer} isTrainer />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trainers;