import React, { useState } from 'react';
import { setMediaQuery } from './../../media/media';
import classnames from 'classnames';
import arrow from './../../icon/arrow.svg';
import './style.scss';

function GasketForFrameDetailPage({ titleRow, descProp, mediaQuery, ...props }) {
  const [switchDropdownList, setSwitchDropdownList] = useState(false)
  const [catchMouseOverNode, setStatusMouseOver] = useState(false)

  const handlerOpenDropdownList = () => {
    if (switchDropdownList) setSwitchDropdownList(false)
    else setSwitchDropdownList(true)
  }

  return (
    <div className="content-section">
      <div>
        <span className={`progress-vert-line ${setMediaQuery('media-progress-vert-line', mediaQuery)}`}></span>
        <img src={arrow} alt={'ico'} className={classnames({
          'imagine-hover_active': switchDropdownList,
          [setMediaQuery('media-arrow', mediaQuery)]: true,
        })} />
      </div>
      <div className="row-item">

        <h3
          className={`subtitle-content-section ${setMediaQuery('media-subtitle-content-section', mediaQuery)}`}
          onMouseOver={() => setStatusMouseOver(true)}
          onMouseOut={() => setStatusMouseOver(false)}
          onClick={handlerOpenDropdownList}>
          {titleRow.toUpperCase()}
        </h3>
        <span className={classnames({
          'separator-content-title': true,
          'separator-content-title__active': switchDropdownList,
          'separator-content-title__hover': !switchDropdownList ? catchMouseOverNode : false,
          [setMediaQuery('media-separator-content-subtitle', mediaQuery)]: true,
        })}></span>

        <div className={`wrapper-to-description-subtitle ${setMediaQuery('media-wrapper-to-description-subtitle', mediaQuery)}`}>
          <ul style={{ display: (switchDropdownList ? 'block' : 'none') }}>
            {descProp.map((value, index) => (
              <li key={index} ><b>{value.subtitle}:</b> {typeof value.description === 'object' ? value.description.map((value, index) => (
                <ul key={index}>
                  <li><b>{`${index + 1}.`}</b> {value}</li>
                </ul>
              )) : value.description}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GasketForFrameDetailPage;