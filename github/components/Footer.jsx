import React from "react"

const fullyear = new Date().getFullYear;

function Footer()
{
    return (
    <footer>
        <p>Copyright c {fullyear}</p>
    </footer>
    );
}

export default Footer;