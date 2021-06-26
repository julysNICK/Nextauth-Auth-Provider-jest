import { fireEvent, screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { SliderData } from '../Slider/mock';
import { CarouselNuke, CarouselNukeProps } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
const props: CarouselNukeProps = {
  slides: [],
};
export const SliderDataa = [
  {
    image:
      'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];
describe('<CarouselNuke />', () => {
  it('should render carousel', () => {
    renderTheme(<CarouselNuke slides={SliderData} />);

    expect(screen.getAllByRole('img')[0]).toBeInTheDocument();
  });

  it('should render null', () => {
    const { container } = renderTheme(<CarouselNuke slides={[]} />);
    expect(container.nextSibling).toBeNull();
  });
  it('should render image when click on the button next', () => {
    renderTheme(<CarouselNuke slides={SliderData} />);
    const button = screen.getByLabelText('previous');
    fireEvent.click(button);
    expect(screen.getAllByRole('img')[0]).toBeInTheDocument();
  });
  it('should render image when click on the button next ', () => {
    renderTheme(<CarouselNuke slides={SliderData} />);
    const button = screen.getByLabelText('next');
    fireEvent.click(button);
    expect(screen.getAllByRole('img')[0]).toBeInTheDocument();
  });
});
