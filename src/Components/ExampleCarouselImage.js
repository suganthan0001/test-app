import React from 'react'

function ExampleCarouselImage({imageSource}) {
  return (
    <>
        <img
        className="d-block w-100"
        src={imageSource}
        alt='image'
      />
    </>
  )
}

export default ExampleCarouselImage