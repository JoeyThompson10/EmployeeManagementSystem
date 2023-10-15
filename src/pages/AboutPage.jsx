import React from 'react';
import '../css/global.css';

function AboutPage() {
  return (
    <div className="about-page">
      <h1>About This App</h1>
      <p>This application is a minimalistic template designed to help kickstart your next React project with Vite. It incorporates basic yet essential features such as routing, navigation, and tabs to demonstrate a typical app structure.</p>
      <h2>Packages Used</h2>
      <ul>
        <li><strong>react-router-dom:</strong> Enables the routing functionalities within the application, allowing for seamless navigation between different components/pages.</li>
        <li><strong>react-tabs:</strong> An accessible and easy-to-use package to implement tabs within the app, enhancing the user experience and content organization.</li>
      </ul>
      <h3>Customizable Styling</h3>
      <p>All styles are easily customizable through the CSS file. The use of CSS variables ensures that you can quickly change the app's color scheme, text styles, and other visual elements from a central location. Feel free to adapt and extend the styles to match your specific needs and brand identity.</p>
    </div>
  );
}

export default AboutPage;
