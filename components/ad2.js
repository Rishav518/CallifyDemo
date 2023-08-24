import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Ad2 = ({ adClient, adSlot }) => {

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    // <ins
    //   className="adsbygoogle"
    //   style={{ display: 'inline-block', width: '720px', height: '250px' }}
    //   data-ad-client={adClient}
    //   data-ad-slot={adSlot}
    // />
  );
};

Ad2.propTypes = {
  adClient: PropTypes.string.isRequired,
  adSlot: PropTypes.string.isRequired
};

export default Ad2;
