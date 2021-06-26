import { Meta, Story } from '@storybook/react/types-6-0';

import { Navbar, NavbarProps } from '.';

export default {
  title: 'Navbar',

  component: Navbar,
} as Meta<NavbarProps>;

export const Template: Story<NavbarProps> = (args) => {
  return (
    <div>
      <Navbar {...args} />
    </div>
  );
};
