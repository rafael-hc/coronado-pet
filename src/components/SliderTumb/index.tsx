import Image from 'next/image'
import { MouseEvent, TouchEvent, useState } from 'react'
import {
  Magnfy,
  Slide,
  SliderTumbContainer,
  SlidesContainer,
  SlideTransition,
  Thumbnail,
  ThumbnailsContainer,
} from './styles'

interface SliderThumbProps {
  images: string[]
  thumbnailPosition: 'botton' | 'left'
}

const ADJUSTMENT_POSTION_CURSOS = 110

export function SliderThumb({ images, thumbnailPosition }: SliderThumbProps) {
  const [slideActive, setSlideActive] = useState<any>(0)
  const [touchS, setTouchS] = useState(0)
  const [touchM, setTouchM] = useState(0)
  const [magnfyStyle, setMagnfyStyle] = useState({
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

    setMagnfyStyle((state) => ({
      ...state,
      backgroundPosition: `${xPercentage}% ${yPercentage}%`,
      top: `${offsetY + ADJUSTMENT_POSTION_CURSOS}px`,
      left: `${offsetX + ADJUSTMENT_POSTION_CURSOS}px`,
      display: 'block',
    }))
  }

  function zoomOut() {
    setMagnfyStyle((state) => ({
      ...state,
      display: 'none',
    }))
  }
  function zoomIn() {
    setMagnfyStyle((state) => ({
      ...state,
      backgroundImage: `url(${images[slideActive]})`,
    }))
  }

  return (
    <>
      <SliderTumbContainer>
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
        </SlidesContainer>

        <ThumbnailsContainer thumbPosition={thumbnailPosition}>
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
      </SliderTumbContainer>
      <Magnfy style={magnfyStyle}></Magnfy>
    </>
  )
}
