import React from 'react';

import './contact.css';

// The Contact component goes here.  It should be the default export.
export default function Contact(props) {
    return (
        <div id={props.index} className="contact">
         <div className="contact-photo"><img src={props.photo} /></div>
		<div className="contact-name">{props.name}</div>
		<div className="contact-address">{props.address}</div>
        </div>
    );
}