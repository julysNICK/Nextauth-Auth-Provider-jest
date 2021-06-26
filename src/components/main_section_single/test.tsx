import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';

import { Main_section_single, Main_section_singleProps } from '.';
import { SliderData } from '../Slider/mock';

const props: Main_section_singleProps = {
  slides: [],
};
jest.useFakeTimers();
describe('<Main_section_single />', () => {
  it('should render', () => {
    renderTheme(<Main_section_single {...props} slides={SliderData} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
