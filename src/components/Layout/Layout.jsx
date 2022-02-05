import React from 'react';
import './Layout.css';

import image1 from '../../assets/load-profile-images/twod.jpeg';
import image2 from '../../assets/load-profile-images/threed.jpeg';

function Layout() {
  return (
      <div className='layout'>

          <h1>2D and 3D Layout</h1>

          <div className='layout__container'>
            <div className='layout__image'>
                <img src={image1} />
            </div>

            <div className='layout__image'>
                <img src={image2}/>
            </div>

          </div>

      </div>
  )
}

export default Layout;
