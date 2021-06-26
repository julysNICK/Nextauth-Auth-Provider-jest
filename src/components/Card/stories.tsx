import { Meta, Story } from '@storybook/react/types-6-0';

import { Card, CardProps } from '.';
import mock from './mock';

export default {
  title: 'Card',

  component: Card,
  args: mock,
} as Meta<CardProps>;

export const CardBlack: Story<CardProps> = (args) => {
  const { Levelcolor, imageCard, titleMovie } = mock;
  return (
    <div>
      <Card
        Levelcolor={Levelcolor}
        titleMovie={titleMovie}
        imageCard={imageCard}
      />
    </div>
  );
};

export const CardRed: Story<CardProps> = (args) => {
  const { Levelcolor, imageCard, titleMovie } = mock;
  return (
    <div>
      <Card Levelcolor={10} titleMovie={titleMovie} imageCard={imageCard} />
    </div>
  );
};
