import { Meta, Story } from '@storybook/react/types-6-0';

import { About_single, About_singleProps } from '.';

export default {
  title: 'About_single',

  component: About_single,
} as Meta<About_singleProps>;

export const Template: Story<About_singleProps> = (args) => {
  return (
    <div>
      <About_single {...args} />
    </div>
  );
};
