import React from 'react';
import './style.scss';

function FooterPage({ contact, ...props }) {
  return (
    <footer>
      <ul>
        {contact.map((prop, index) => <li key={index}><a href={prop.href}>{prop.nameNetwork}</a></li>)}
      </ul>
    </footer>
  )
}

export default FooterPage;