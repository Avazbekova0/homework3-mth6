import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="shop-header">
      <div className="header-inner">
        <Link to="/" className="brand">
          <span className="brand-icon">拼</span>
          <span className="brand-name">PIDUODUO</span>
        </Link>

        <Link to="/cart" className="header-cart">
          🛒
          <span>Корзина</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
