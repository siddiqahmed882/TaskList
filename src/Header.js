const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1 className='header__title'>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: 'Todo App',
};

export default Header;
