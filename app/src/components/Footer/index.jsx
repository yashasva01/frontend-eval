import * as React from 'react';
import './footerStyles.css';
import axios from 'axios';

function Footer() {
  const getAllthemes = async () => {
    axios.get('http://localhost:3000/api/themes').then(res => {
      console.log(res.data);
    });
  };
  React.useEffect(() => {
    getAllthemes();
  });

  return (
    <div className="footer">
      <p>Themes</p>

      <div className=""></div>
    </div>
  );
}

export default Footer;
