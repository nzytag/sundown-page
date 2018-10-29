import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const ContactPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="contact-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>Contact Us</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              Here at  <span className="highlight">Sundown Special</span> we love
              everything web.
            </p>
            <p>
              Everything started when the founders met at school and started creating {' '}
              <span className="highlight"> awesome stuff</span> We decided to go ahead and start venturing into the freelance world in order to always have a new challenge at hand. 
              We realized that the technologies are ever changing and we could always have that "new car smell" approach to development. We also like to{' '}
              <span className="highlight">blog</span> about the approach we are taking with the most challenging projects.
            </p>
            <h1 style={{ color: colorPrimary }}>Technologies we use</h1>

            <p>
              React-Redux, Node.js, Swift, Android, React Native, Docker, etx etc
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
         
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".contact-page" />
    </div>
  );
};

ContactPage.contextTypes = {
  theme: PropTypes.any
};

export default ContactPage;
