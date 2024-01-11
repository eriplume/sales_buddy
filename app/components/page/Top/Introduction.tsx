"use client"
import { Carousel } from '@mantine/carousel';
import Welcome from './Welcome';
import WhatDo from './WhatDo';
import Chance from './Chance';
import Start from './Start';

export default function Introduction() {
  return (
    <>
      <section className="text-gray-600 body-font max-w-xs md:max-w-2xl lg:max-w-4xl bg-white rounded-sm shadow-md">
        <Carousel withIndicators controlsOffset="xs" className='flex w-full pb-3'>
          <Carousel.Slide><Welcome /></Carousel.Slide>
          <Carousel.Slide><WhatDo/></Carousel.Slide>
          <Carousel.Slide><Chance /></Carousel.Slide>
          <Carousel.Slide><Start/></Carousel.Slide>
        </Carousel>
      </section>
    </>
  )
}
