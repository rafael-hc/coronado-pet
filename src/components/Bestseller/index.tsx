import {
  ArrowSlide,
  BestSllerContainer,
  ItemSlider,
  SliderContainer,
  SliderHeader,
} from './styles'
import 'keen-slider/keen-slider.min.css'
import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import CardProduct from '../CardProduct'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { LatestProducts } from '../../utils/interfaces/productInterface'

interface BestSellerProps {
  title: string
  products: LatestProducts[]
}

export const Bestseller = ({ title, products }: BestSellerProps) => {
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 'auto',
      spacing: 15,
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
        {products.map((product) => {
          return (
            <ItemSlider key={product.id} className="keen-slider__slide">
              <CardProduct
                name={product.name}
                imageUrl={product.imageUrl[0]}
                price={product.price}
                slug={product.slug}
              />
            </ItemSlider>
          )
        })}
      </SliderContainer>
    </BestSllerContainer>
  )
}
