import { Meta, Story } from '@storybook/react/types-6-0';

import { CarouselMovie, CarouselMovieProps } from '.';
import { SliderData } from '../Slider/mock';
export default {
  title: 'CarouselMovie',

  component: CarouselMovie,
} as Meta<CarouselMovieProps>;

export const Template: Story<CarouselMovieProps> = (args) => {
  return (
    <div>
      <CarouselMovie slides={SliderData} />
    </div>
  );
};
