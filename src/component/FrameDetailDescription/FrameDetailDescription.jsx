import React, { useState } from 'react';
import { GasketForFrameDetailPage, GasketGalleryWorkUser } from './../index';
import { setMediaQuery } from './../../media/media';
import './style.scss';


function FrameDetailDescription({ titleSection, iconType, typeSection, dataProperty, mediaQuery, ...props }) {
  const [isOpenMoreButton, setIsOpenMoreButton] = useState(false)
  return (
    <section className="section-detail-page">
      <div className="header-section">
        <div className={`icon-section ${setMediaQuery('media-icon-section', mediaQuery)}`}>
          <i className={`fa ${iconType}`} aria-hidden="true"></i>
        </div>
        <h3 className={`title-section-detail-page ${setMediaQuery('media-title-section-detail-page', mediaQuery)}`}>{titleSection}</h3>
        <span className={`separator-node-light ${setMediaQuery('media-separator-node-light', mediaQuery)}`}></span>
      </div>

      <div className="wrapper-grid-for-content">
        {typeSection.containerContent &&
          dataProperty.map((prop, index) => {
            return <GasketForFrameDetailPage key={index} titleRow={prop.titleRow} descProp={prop.descProp} mediaQuery={mediaQuery} />
          }) || typeSection.containerGallery &&
          <div className="wrapper-for-gallery">
            <span className={`separator-gallery ${setMediaQuery('media-separator-gallery', mediaQuery)}`}></span>
            <div className={`wrapper-items-gallery ${setMediaQuery('media-wrapper-items-gallery', mediaQuery)}`}>
              {dataProperty.map((objectProp, index) => {
                if (index > 5 && !isOpenMoreButton || mediaQuery.sm && index > 3 && !isOpenMoreButton || mediaQuery.ms && index > 1 && !isOpenMoreButton) return null
                return (
                  <GasketGalleryWorkUser
                    key={index}
                    subtitle={objectProp.subtitle}
                    description={objectProp.description}
                    backCard={objectProp.backCard}
                  />
                )
              })}
            </div>
            <input
              type="button"
              className="button-section-gallery-more"
              onClick={() => setIsOpenMoreButton(!isOpenMoreButton)}
              value={!isOpenMoreButton ? 'more' : 'close'} />
          </div>
        }
      </div>
    </section>
  )
}


function ContainerFrameDetailDescription({ data, mediaQuery, ...props }) {
  return (
    <>
      {data.map((dataObjectPropertySection, index) => {
        const { titleSection, iconType, dataProperty, typeSection } = dataObjectPropertySection
        return (
          <FrameDetailDescription
            key={index}
            titleSection={titleSection}
            iconType={iconType}
            typeSection={typeSection}
            dataProperty={dataProperty}
            mediaQuery={mediaQuery}
          />
        )
      })}
    </>
  )
}


export default ContainerFrameDetailDescription;

