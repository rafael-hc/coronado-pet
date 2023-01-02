import Image from 'next/image'
import { MouseEvent, TouchEvent, useState } from 'react'
import {
  Magnify,
  Slide,
  SliderThumbContainer,
  SlidesContainer,
  SlideTransition,
  Thumbnail,
  ThumbnailsContainer,
} from './styles'

interface SliderThumbProps {
  images: string[]
  thumbnailPosition: 'bottom' | 'left'
}

const ADJUSTMENT_POSITION_CURSOS = 250 / 2

export function SliderThumb({ images, thumbnailPosition }: SliderThumbProps) {
  const [slideActive, setSlideActive] = useState<any>(0)
  const [touchS, setTouchS] = useState(0)
  const [touchM, setTouchM] = useState(0)
  const [magnifyStyle, setMagnifyStyle] = useState({
    backgroundImage: `url(${images[slideActive]})`,
  })

  function touchMove(evt: TouchEvent<HTMLDivElement>) {
    setTouchM(evt.changedTouches[0].pageX)

    if (slideActive < images.length - 1 && touchM - touchS < -50) {
      setSlideActive((state: number) => state + 1)
    }
    if (slideActive > 0 && touchM - touchS > 50) {
      setSlideActive((state: number) => state - 1)
    }
  }
  function touchStart(evt: TouchEvent<HTMLDivElement>) {
    setTouchS(evt.changedTouches[0].pageX)
  }

  function zoomImg(evt: MouseEvent<HTMLDivElement>) {
    const { offsetX, offsetY, target } = evt.nativeEvent
    const { offsetWidth, offsetHeight } = target as HTMLImageElement

    const xPercentage = (offsetX / offsetWidth) * 100
    const yPercentage = (offsetY / offsetHeight) * 100

    setMagnifyStyle((state) => ({
      ...state,
      backgroundPosition: `${xPercentage}% ${yPercentage}%`,
      top: `${offsetY - ADJUSTMENT_POSITION_CURSOS}px`,
      left: `${offsetX - ADJUSTMENT_POSITION_CURSOS}px`,
      display: 'block',
    }))
  }

  function zoomOut() {
    setMagnifyStyle((state) => ({
      ...state,
      display: 'none',
    }))
  }
  function zoomIn() {
    setMagnifyStyle((state) => ({
      ...state,
      backgroundImage: `url(${images[slideActive]})`,
    }))
  }

  return (
    <>
      <SliderThumbContainer>
        <ThumbnailsContainer>
          {images.map((image, index) => (
            <Thumbnail
              key={image}
              onClick={() => setSlideActive(index)}
              active={slideActive === index}
            >
              <Image
                src={image}
                alt="Produto"
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </Thumbnail>
          ))}
        </ThumbnailsContainer>
        <SlidesContainer onTouchEnd={touchMove} onTouchStart={touchStart}>
          <SlideTransition activeSlide={slideActive}>
            {images.map((image, index) => (
              <Slide
                key={image}
                data-index={index + 1}
                onMouseMove={zoomImg}
                onMouseLeave={zoomOut}
                onMouseEnter={zoomIn}
              >
                <Image
                  src={image}
                  alt="Produto"
                  fill
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  draggable={false}
                />
              </Slide>
            ))}
          </SlideTransition>
          <Magnify style={magnifyStyle}></Magnify>
        </SlidesContainer>
      </SliderThumbContainer>
    </>
  )
}
