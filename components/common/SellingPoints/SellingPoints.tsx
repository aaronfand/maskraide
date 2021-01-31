import React, { FC } from 'react'
import { Container } from '@components/ui'
import { RightArrow } from '@components/icons'
import s from './SellingPoints.module.css'
import Link from 'next/link'
interface Props {
  className?: string
}

const SellingPoints: FC<Props> = () => {
  return (
    <div className={s.sellingPoints}>
      <Container>
        <div className="flex flex-col md:flex-row justify-between">
          <div  className="pt-8 pr-8">
            <img
              src="/market.jpg"
              alt="Mask-R-Aide"
              className={s.pointsImage}
              width="400px"
              height="300px"
            />
          </div>
          <div className={s.pointsTextContainer}>
            <div className="flex flex-col justify-between">
              <h2 className={s.heading}>Filtration, Fit and Fashion:</h2>
              <p className="mt-5 text-lg leading-7 text-accent-2 text-white">
                <p>
                  Our masks have{' '}
                  <span className={s.highlightedText}>
                    Excellent Filtration{' '}
                  </span>
                  with three pre-shrunk cotton fabric layers, not just one or
                  two.&nbsp; The non-woven inner layer excels at{' '}
                  <strong>trapping</strong> particles.&nbsp; You can{' '}
                  <strong>hand or machine wash</strong> daily on Gentle
                  (preferrably in a garment bag) and <strong>Air Dry.</strong>
                </p>
                <br />
                <p>
                  Our masks have{' '}
                  <span className={s.highlightedText}>Excellent Fit </span>with
                  <strong> five different sizes</strong>; from youngest child to
                  the largest male (beard and all).&nbsp; The cut of this mask
                  is designed to fit your nose and chin better.&nbsp; There is a{' '}
                  <strong>metallic strip</strong> to mold to your nose and keep
                  your glasses from <em>fogging up</em>.&nbsp; With extra space
                  in front of your mouth, you won't eat your mask while you are
                  talking.
                </p>
                <br />
                <p>
                  The <strong>elastic ear loops</strong> can be used to secure
                  this mask or you can use the included ear saver.&nbsp; This{' '}
                  <strong>ear saver</strong> uses snaps to connect to the ear
                  loops and wrap around your neck.
                </p>
              </p>
              <Link href="/blog">
                <a className="text-white text-lg pt-3 font-bold hover:underline flex flex-row cursor-pointer w-max-content">
                  Read it here
                  <RightArrow width="20" heigh="20" className="ml-1" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SellingPoints
