import React from "react";
import ClassImage from './ClassImage';
import ClassInfo from './ClassInfo';
import ClassBMI from './ClassBmi';
import './Class.css';

function OurClasses () {
    return (
        <>
        <ClassImage />
        <ClassInfo />
        <ClassBMI />
        </>
    );
};

export default OurClasses;