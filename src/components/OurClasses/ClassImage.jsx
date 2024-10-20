import React, { useState } from "react";
import yogaImage from '../../images/yoga.jpg';
import groupImage from '../../images/group.webp';
import soloImage from '../../images/solo.jpg';
import stretchingImage from '../../images/stret.webp';

const ClassImage = () => {
    const [currentImage, setCurrentImage] = useState(yogaImage);
    const [activeClass, setActiveClass] = useState('');

    //Tıklanan butona göre uygun resim gösteriliyor.
    const showImage = (classType) => {
        switch (classType) {
            case 'yoga':
                setCurrentImage(yogaImage);
                break;
            case 'group':
                setCurrentImage(groupImage);
                break;
            case 'solo':
                setCurrentImage(soloImage);
                break;
            case 'stretching':
                setCurrentImage(stretchingImage);
                break;
            default:
                setCurrentImage(yogaImage);
                break;
        }
    };

    //Butona tıklandığında aktif sınıfı güncelle.
    const handleButtonClick = (className) => {
        setActiveClass(className);
        showImage(className);
    };

    return (
        <section className="classes" id="classes">
            <div className="class-container">
               <h1>OUR CLASSES</h1>
               <p className="class-description">Lorem ipsum is not simply random text. It has roots in a piece of classical at <br /> Hampden-Sydney College.</p>
            <div className="button-container">
               <button 
                    onClick={() => handleButtonClick('yoga')} className={`btn-class ${activeClass === 'yoga' ? 'active' : ''}`}>Yoga
                </button>
               <button 
                    onClick={() => handleButtonClick('group')} className={`btn-class ${activeClass === 'group' ? 'active' : ''}`}>Group
                </button>
               <button 
                    onClick={() => handleButtonClick('solo')} className={`btn-class ${activeClass === 'solo' ? 'active' : ''}`}>Solo
                </button>
               <button 
                    onClick={() => handleButtonClick('stretching')} className={`btn-class ${activeClass === 'stretching' ? 'active' : ''}`}>Streching
                </button>
            </div>
            <div className="class-current-image">
                <img src={currentImage} alt="current class" className="class-image" />
            </div>
            </div>
        </section>
    );
};

export default ClassImage;