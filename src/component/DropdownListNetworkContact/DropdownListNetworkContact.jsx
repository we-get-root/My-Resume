import React from 'react';
import { setMediaQuery } from './../../media/media';
import './style.scss';

const DropdownListNetworkContact = ({ dataContact, mediaQuery, ...props }) => {

  return (
    <ul className={`menu topRight ${setMediaQuery('media-menu', mediaQuery)}`}>
      <li className="share bottom">
        <i className="fa fa-share-alt"></i>
        <ul className="submenu">
          {dataContact.map((objectProp) => {
            return (
              <li>
                <a href={objectProp.href} className={objectProp.nameNetwork}>
                  <i className={`fa fa-${objectProp.nameNetwork}`}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </li>
    </ul>
  )
}

export default DropdownListNetworkContact;