import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import Link from 'next/link'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useState } from 'react'
import { ArrowSlide, Dot, Dots, ItemSlide, SliderContainer, TextSlide } from './styles'

export const Carrossel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 6000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ],
  )

  return (
    <SliderContainer>
      <div ref={sliderRef} className="keen-slider">
        <ItemSlide className="keen-slider__slide">
          <Image
            src="./images/main-banner-01_1903x650.webp"
            alt="Cachorro marrom com a patinha levantada usando uma coleira com pingente de ossinho"
            fill
          />
          <TextSlide active={currentSlide === 0}>
            <span>É Sobre Fazer</span>
            <span>Novos Amigos!</span>
            <Link href="/cachorros">Confira</Link>
          </TextSlide>
        </ItemSlide>
        <ItemSlide className="keen-slider__slide">
          <Image
            src="./images/main-banner-2_1903x650.webp"
            alt="Gato peludo em cor mesclada entre bege e marrom"
            fill
          />
          <TextSlide active={currentSlide === 1}>
            <span>O cuidado dos</span>
            <span>seus gatos em</span>
            <span>boas mãos!</span>
            <Link href="/gatos">Confira</Link>
          </TextSlide>
        </ItemSlide>
      </div>
      {loaded && instanceRef.current && (
        <>
          <ArrowSlide
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
            // disabled={currentSlide === 0}
            position="left"
          >
            <CaretLeft size={30} />
          </ArrowSlide>
          <ArrowSlide
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
            // disabled={
            //   currentSlide ===
            //   instanceRef.current.track.details.slides.length - 1
            // }
            position="right"
          >
            <CaretRight size={30} />
          </ArrowSlide>
        </>
      )}
      {loaded && instanceRef.current && (
        <Dots>
          {Array.from(Array<number>(instanceRef.current.track.details.slides.length).keys()).map(
            (idx) => {
              return (
                <Dot
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  active={currentSlide === idx}
                ></Dot>
              )
            },
          )}
        </Dots>
      )}
    </SliderContainer>
  )
}
