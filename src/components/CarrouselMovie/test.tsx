import { fireEvent, screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { SliderData } from '../Slider/mock';
import { CarouselMovie, CarouselMovieProps } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
const props: CarouselMovieProps = {
  slides: [],
};
export const SliderDataa = [
  {
    image:
      'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];
describe('<CarouselMovie />', () => {
  it('should render', () => {
    renderTheme(<CarouselMovie slides={SliderData} />);

    expect(screen.getAllByRole('img')[0]).toBeInTheDocument();
  });
  it('should render', () => {
    renderTheme(<CarouselMovie slides={SliderData} />);
    const div = screen.getAllByTestId('wrapper_image')[0];
    expect(div).toBeInTheDocument();
  });
  it('should render', () => {
    const { container } = renderTheme(<CarouselMovie slides={[]} />);
    expect(container.nextSibling).toBeNull();
  });
  it('should render', () => {
    renderTheme(<CarouselMovie slides={SliderData} />);
    const button = screen.getByTestId('prev_slide');
    fireEvent.click(button);
    expect(screen.getAllByRole('img')[0]).toBeInTheDocument();
  });
  it('should render', () => {
    renderTheme(<CarouselMovie slides={SliderData} />);
    const button = screen.getByTestId('next_slide');
    fireEvent.click(button);
    expect(screen.getAllByRole('img')[0]).toBeInTheDocument();
  });
  it('should render', () => {
    const { rerender } = renderTheme(<CarouselMovie slides={SliderData} />);
    const button = screen.getByTestId('next_slide');
    fireEvent.click(button);
    rerender(
      <ThemeProvider theme={theme}>
        <CarouselMovie slides={SliderData} />
      </ThemeProvider>,
    );
    const button1 = screen.getByTestId('next_slide');
    fireEvent.click(button1);
    expect(screen.getAllByRole('img')[0]).toBeInTheDocument();
  });
  it('should render', () => {
    const { rerender } = renderTheme(<CarouselMovie slides={SliderDataa} />);
    const button = screen.getByTestId('prev_slide');
    fireEvent.click(button);
    rerender(
      <ThemeProvider theme={theme}>
        <CarouselMovie slides={SliderDataa} />
      </ThemeProvider>,
    );
    const button1 = screen.getByTestId('prev_slide');
    fireEvent.click(button1);
    expect(screen.getAllByRole('img')[0]).toBeInTheDocument();
  });
});
