import React from 'react'

import './Display.styles.css';

const Display = props => {
    const {data} = props;
    console.table(props);
    return (
        <div className="display-weather">
            <h1>CLIMA</h1>
            <div className="card">
                <div className="card-data">
                    <h2 className="card-title">
                        {data.name}, {data.sys.country}
                    </h2>
                    <p className="card-subtitle">
                        a las {new Date().toLocaleTimeString()}
                    </p>
                    <div className="card-details">
                        <p>
                            {data.main.temp.toFixed(1)}
                            <sup> o</sup>
                        </p>
                    </div>
                    <div className="card-btn">
                        <a href="#">Ver más</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Display
