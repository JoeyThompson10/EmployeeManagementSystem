import React from 'react';

const HiringOnboarding = () => {
    return (
        <div>
            <h1>Onboarding</h1>
            <h2>The Videos Listed Below Represent Our Team Values. Please Watch Them.</h2>
            <h3 style={{textAlign:'center'}}>How To Code:</h3>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe
                style={{ border: 'none' }}
                width="420"
                height="315"
                src="https://youtube.com/embed/QFaFIcGhPoM"
                title="YouTube Video"
            ></iframe>
            </div>
            <br />
            <h3 style={{textAlign:'center'}}>How To Wear Clothes:</h3>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe
                style={{ border: 'none' }}
                width="420"
                height="315"
                src="https://youtube.com/embed/7OlfCL5nvVU"
                title="YouTube Video"
            ></iframe>
            </div>
            <br />
            <h3 style={{textAlign:'center'}}>How To Succeed:</h3>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe
                style={{ border: 'none' }}
                width="420"
                height="315"
                src="https://youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube Video"
            ></iframe>
            </div>
        </div>
    );
};

export default HiringOnboarding;
