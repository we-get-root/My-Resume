import React, { useState, useEffect } from 'react';
import { HeaderPageDetailDescription, FrameDetailDescription, SectionDescriptionAboutMe, FooterPage, Preloader } from './component/index';
import { useMediaQuery } from 'react-responsive';
import { setMediaQuery } from './media/media';
import data from './data/data';
import './App.scss';


function App({...props}) {
  const [onLoad, setOnLoad] = useState(false)

  useEffect(() => {
    if(!onLoad) setTimeout(() => setOnLoad(true), 0)
  }, [onLoad, setOnLoad])
  const mediaQuery = {
    ms: useMediaQuery({ maxWidth: '376px', }),
    xs: useMediaQuery({ maxWidth: '576px', }),
    sm: useMediaQuery({ maxWidth: '768px', }),
    md: useMediaQuery({ maxWidth: '992px', }),
    lg: useMediaQuery({ maxWidth: '1200px', }),
  }


  return (
    <>
      {onLoad ?
        <div className={`root-grid ${setMediaQuery('root-grid', mediaQuery)}`}>
          <HeaderPageDetailDescription data={data.hederData} mediaQuery={mediaQuery} />
          <SectionDescriptionAboutMe />
          <FrameDetailDescription data={data.containData} mediaQuery={mediaQuery} />
          <FooterPage contact={data.hederData.dataContact} />
        </div> : <Preloader />
      }
    </>
  )
}

export default App;
