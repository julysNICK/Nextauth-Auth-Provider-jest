import { fireEvent, screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { SliderData } from './mock';
import { Slider, SliderProps } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
const props: SliderProps = {
  slides: [],
};
export const SliderDataa = [
  {
    image:
      'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];
describe('<Slider />', () => {
  it('should render component son null', () => {
    const { container } = renderTheme(<Slider slides={undefined} />);

    expect(container.nextSibling).toBeNull();
  });

  it('should render component with img', () => {
    renderTheme(<Slider slides={SliderData} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('should render component clicked button prev to pass the image', () => {
    renderTheme(<Slider slides={SliderData} />);

    const button = screen.getByTestId('prev_slide');

    fireEvent.click(button);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('should render component clicked button next to pass the image', () => {
    renderTheme(<Slider slides={SliderData} />);

    const button = screen.getByTestId('next_slide');

    fireEvent.click(button);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('should render', () => {
    renderTheme(<Slider slides={SliderDataa} />);

    const button = screen.getByTestId('next_slide');

    fireEvent.click(button);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('should render last img', () => {
    const { rerender } = renderTheme(<Slider slides={SliderData} />);

    const button = screen.getByTestId('prev_slide');

    fireEvent.click(button);
    rerender(
      <ThemeProvider theme={theme}>
        <Slider slides={SliderData} />
      </ThemeProvider>,
    );
    const button1 = screen.getByTestId('prev_slide');

    fireEvent.click(button1);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('should render component snapshot', () => {
    const { container } = renderTheme(<Slider slides={SliderData} />);

    expect(container).toMatchSnapshot();
  });
});
