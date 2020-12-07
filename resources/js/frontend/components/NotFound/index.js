import React from 'react';
import notfoundImg from './notfound.jpg'
import './NotFound.scss';

const NotFound = props => {
    return (
        <div>
            <div className="notfound container">
                <img src={notfoundImg} alt="Opp...! can`t loaded image"/>
            </div>
        </div>
    );
};

export default NotFound;