import { Meta, Story } from '@storybook/react/types-6-0';

import { CarouselNuke, CarouselNukeProps } from '.';
import { SliderData } from '../Slider/mock';
export default {
  title: 'CarouselNuke',

  component: CarouselNuke,
} as Meta<CarouselNukeProps>;

export const Template: Story<CarouselNukeProps> = (args) => {
  return (
    <div>
      <CarouselNuke slides={SliderData} />
    </div>
  );
};
