import React, { useState } from 'react';
import classnames from 'classnames';
import './style.scss';


function GasketGalleryWorkUser({ subtitle, description, backCard, ...props }) {
  const [statusMouseOver, setStatusMouseOver] = useState(false)

  return (
    <div className="card-work-user rainbow">
      <div
        className="gallery-border-card"
        style={{ backgroundImage: `url(${backCard})` }}
        onMouseOver={() => setStatusMouseOver(true)}
        onMouseOut={() => setStatusMouseOver(false)}>
        <div className={classnames({
          "slide-title-card-gallery": true,
          "slide-title-card-gallery-open": statusMouseOver,
          "slide-title-card-gallery-closed": !statusMouseOver,
        })}>
          <h3>{subtitle.toUpperCase()}</h3>
          <p>{description}</p>

        </div>
      </div>
    </div>
  )
}

export default GasketGalleryWorkUser;