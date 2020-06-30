import React from 'react';
import { DropdownListNetworkContact } from './../index';
import { setMediaQuery } from './../../media/media';
import './style.scss';


const HeaderPageDetailDescription = ({ data, mediaQuery, ...props }) => {
  return (
    <header>
      <DropdownListNetworkContact dataContact={data.dataContact} mediaQuery={mediaQuery} />
      <div className="wrapper-for-imagine">
        <div className={`frame-imagine ${setMediaQuery('media-frame-imagine', mediaQuery)}`}>
          <img src={data.avatar} alt="avatar user" />
        </div>
      </div>
      <div className="wrap-for-block-info">
        <h1 className={`header-name-user ${setMediaQuery('media-header-name-user', mediaQuery)}`}>
          {data.firstName.toUpperCase()}<b>{data.lastName.toUpperCase()}</b>
        </h1>
        <span className="separator-node-light"></span>
        <div className={`wrapper-to-description-header ${setMediaQuery('media-wrapper-to-description-header', mediaQuery)}`}>
          <ul>
            {data.descProp.map((objectProp, index) => {
              return (
                <li key={index}><b>{objectProp.subtitle}: </b> {objectProp.description}</li>
              )
            })}
          </ul>
        </div>
      </div>
      <span className="separator-node-header"></span>
    </header>
  )
}

export default HeaderPageDetailDescription;