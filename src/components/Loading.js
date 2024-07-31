import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading-container">
            <img src={process.env.PUBLIC_URL + "/src/loading.gif"} alt="Loading..." className="loading-gif" />
        </div>
    );
}

export default Loading;
