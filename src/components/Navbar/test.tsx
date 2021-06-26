import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Navbar, NavbarProps } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

const props: NavbarProps = {
  title: 'string',
};

describe('<Navbar />', () => {
  it('should render navbar', () => {
    renderTheme(<Navbar {...props} />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should render navbar with all links', () => {
    renderTheme(<Navbar {...props} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
  it('should render navbar with all <ul> and <li>', () => {
    renderTheme(<Navbar {...props} />);

    expect(screen.getAllByRole('listitem')[0]).toBeInTheDocument();
    expect(screen.getAllByRole('link')[0]).toBeInTheDocument();
  });
  it('should render navbar with logo <a>', () => {
    renderTheme(<Navbar {...props} />);
    expect(screen.getByRole('link', { name: 'Watchit' })).toBeInTheDocument();
  });
  it('should render <input> search', () => {
    renderTheme(<Navbar {...props} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render <button> search open/menu', () => {
    renderTheme(<Navbar {...props} />);
    const button = screen.getByLabelText('Open/Close menu');
    const div = screen.getByLabelText('LogoArea');
    const menuContainer = button.nextSibling;

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
    fireEvent.click(div);
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });
  it('should statement in function', () => {
    renderTheme(<Navbar {...props} />);
    const list = screen.getByRole('list');

    fireEvent.click(list);
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });
  it('should render <button> search open/menu', () => {
    const { rerender } = renderTheme(<Navbar {...props} />);
    const list = screen.getByLabelText('Login menu');

    expect(screen.getByLabelText('Login menu')).toBeInTheDocument();
    fireEvent.click(list);
    rerender(
      <ThemeProvider theme={theme}>
        <Navbar {...props} />
      </ThemeProvider>,
    );
    expect(screen.getByLabelText('Logout menu')).toBeInTheDocument();
  });
  it('should render navbar snap', () => {
    const { container } = renderTheme(<Navbar {...props} />);

    expect(container).toMatchSnapshot;
  });
});
