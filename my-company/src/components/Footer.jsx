import React from "react";

function Footer() {
  return (
    <footer style={{ padding: '10px', borderTop: '1px solid #ccc', marginTop: '20px', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;