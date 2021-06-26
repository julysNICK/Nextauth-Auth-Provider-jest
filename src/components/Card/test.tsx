import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Card, CardProps } from '.';
import mock from './mock';

const props: CardProps = mock;

describe('<Card />', () => {
  it('should render', () => {
    const { imageCard, titleMovie, Levelcolor } = props;
    renderTheme(
      <Card imageCard={imageCard} titleMovie={titleMovie} Levelcolor={10} />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
