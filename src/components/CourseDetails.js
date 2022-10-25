import React from 'react';

const CourseDetails = ({course}) => {
    const {title, image, id , price, rating} = course;
    return (
        <div>
            <h2>Courses Details</h2>
            <h2>{title}</h2>
            <img src={image} alt="" srcset="" />
            <h2>{price}</h2>
            <h2>Pdf download button react to pdf (package)</h2>
            <h2>Get Premium Access to checkout</h2>
        </div>
    );
};

export default CourseDetails;