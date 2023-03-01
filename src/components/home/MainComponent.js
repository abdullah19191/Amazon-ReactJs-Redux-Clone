import React from 'react'
import Banner from './Banner'
import Slider from './Slider'

function MainComponent() {
  return (
    <div>
        <div className="banner_part">
            <Banner/>
            <Slider/>
        </div>
    </div>
  )
}

export default MainComponent