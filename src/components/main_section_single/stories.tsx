import { Meta, Story } from '@storybook/react/types-6-0';

import { Main_section_single, Main_section_singleProps } from '.';
import { SliderData } from '../Slider/mock';
export default {
  title: 'Main_section_single',

  component: Main_section_single,
} as Meta<Main_section_singleProps>;

export const Template: Story<Main_section_singleProps> = (args) => {
  return (
    <div>
      <Main_section_single slides={SliderData} />
    </div>
  );
};
