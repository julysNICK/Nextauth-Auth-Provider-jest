import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';

import { About_single, About_singleProps } from '.';

const props: About_singleProps = {
  title: 'any',
};

describe('<About_single />', () => {
  it('should render', () => {
    renderTheme(<About_single {...props} />);

    // expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
