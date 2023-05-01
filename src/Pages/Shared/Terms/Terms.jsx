import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Our Terms And Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In at molestias recusandae nam nesciunt impedit ad deserunt adipisci nisi optio minima veniam rem illo aliquid doloremque inventore minus, quisquam totam?</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;