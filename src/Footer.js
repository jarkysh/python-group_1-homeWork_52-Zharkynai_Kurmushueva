import React from 'react';

var style = {
    backgroundColor: "#336080",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer({ children }) {
    return (
        <div id = "footer">
            <div style={phantom} />
            <div style={style}>
                { children }
                <p>Posted by:Kurmushueva Jarkynai</p>
                <p>Contact information: <a href="mailto:someone@example.com">someone@example.com</a>.</p>
            </div>
        </div>

    )
}


export {Footer};