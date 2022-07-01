import React from "react";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="footer">
      <p>Copyright ⓒ {year}</p>
    </div>
  );
}

export default Footer;
