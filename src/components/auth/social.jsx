import React from 'react';
import PropTypes from 'prop-types';
import google from "../../../assets/images/google.svg";
import facebook from "../../../assets/images/facebook.svg";
import axios from 'axios';

const Social = (props) => {
  const handleSocialClick = (provider) => {
    // You can customize the URL based on your backend API
    const apiUrl = `https://pm-api.cyclic.app/auth/${provider}`;

    // Perform a GET request when the button is clicked
    axios.get(apiUrl)
      .then((response) => {
        // Handle the response as needed
        console.log(`GET request to ${apiUrl} successful. Response:`, response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error(`Error making GET request to ${apiUrl}:`, error);
      });
  };

  return (
    <div>
      <div className="social-ctn">
        <div className="s" onClick={() => handleSocialClick('google')}>
          <img src={google} alt="" />
          <p className="font-bold">{props.msgG}</p>
        </div>
        <div className="s" onClick={() => handleSocialClick('facebook')}>
          <img src={facebook} alt="" />
          <p className="font-bold">{props.msgF}</p>
        </div>
      </div>
    </div>
  );
};

Social.propTypes = {
  msgG: PropTypes.string.isRequired,
  msgF: PropTypes.string.isRequired,
};

export default Social;
