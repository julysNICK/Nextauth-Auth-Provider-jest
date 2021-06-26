import { Meta, Story } from '@storybook/react/types-6-0';

import { Slider, SliderProps } from '.';
import { SliderData } from './mock';

export default {
  title: 'Slider',

  component: Slider,
  args: SliderData,
} as Meta<SliderProps>;

export const Template: Story<SliderProps> = (args) => {
  return (
    <div>
      <Slider slides={SliderData} />
    </div>
  );
};
