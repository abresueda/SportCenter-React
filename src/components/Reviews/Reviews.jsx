import React from 'react';
import Client from './Client';
import Client1 from '../../images/client1.jpg';
import Client2 from '../../images/client2.jpg'
import './Reviews.css';

const Review = () => {
    //Müşteri verilerini içerir.
    const clients = [
        {
            id: 1,
            name: "Diet Expert",
            title: "CFO",
            imgSrc: Client1,
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, sequ, quia, libero voluptatibus ducimus earum quidem minus eveniet, ex esse rem sed numquam. Error magnam in vero molestiae tempora nostrum.",
        },
        {
            id: 2,
            name: "Cardio Trainer",
            title: "CEO",
            imgSrc: Client2,
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, sequ, quia, libero voluptatibus ducimus earum quidem minus eveniet, ex esse rem sed numquam. Error magnam in vero molestiae tempora nostrum.",
        },
    ];

    return (
        <section className='review' id='review'>
            <div className='review-info-container'>
                <h1>REVIEW CLIENT</h1>
                <p className="review-description">Lorem ipsum is not simply random text. It has roots in a piece of classical at <br /> Hampden-Sydney College.</p>
            </div>
            <div className='review-container'>
                <div className='client-container'>
                    {clients.map(client => (
                        <Client key={client.id} data={client} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Review;