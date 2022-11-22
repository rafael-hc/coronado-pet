import {
  ArrowSlide,
  BestSllerContainer,
  SliderContainer,
  SliderHeader,
} from './styles'
import 'keen-slider/keen-slider.min.css'
import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import CardProduct from '../CardProduct'
import { CaretLeft, CaretRight } from 'phosphor-react'

interface BestSellerProps {
  title: string
}

export const BestSller = ({ title }: BestSellerProps) => {
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 5,
    },
    created() {
      setLoaded(true)
    },
  })
  return (
    <BestSllerContainer>
      <SliderHeader>
        <h2>{title}</h2>
        <div>
          {loaded && instanceRef.current && (
            <>
              <ArrowSlide
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              >
                <CaretLeft size={24} />
              </ArrowSlide>
              <ArrowSlide
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              >
                <CaretRight size={24} />
              </ArrowSlide>
            </>
          )}
        </div>
      </SliderHeader>
      <SliderContainer ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <CardProduct />
        </div>
        <div className="keen-slider__slide">
          <CardProduct />
        </div>
        <div className="keen-slider__slide">
          <CardProduct />
        </div>
        <div className="keen-slider__slide">
          <CardProduct />
        </div>
        <div className="keen-slider__slide">
          <CardProduct />
        </div>
        <div className="keen-slider__slide">
          <CardProduct />
        </div>
        <div className="keen-slider__slide">
          <CardProduct />
        </div>
        <div className="keen-slider__slide">
          <CardProduct />
        </div>
      </SliderContainer>
    </BestSllerContainer>
  )
}
