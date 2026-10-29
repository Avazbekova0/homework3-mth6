import { Link } from 'react-router-dom';
import { useProducts } from '../../products/useProducts';

export const MainPage = () => {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) {
    return <p className="status">Загрузка товаров...</p>;
  }

  if (isError) {
    return <p className="error">Не удалось загрузить товары.</p>;
  }

  const products = data?.products ?? [];

  return (
    <section className="catalog">
      <div className="hero">
        <div className="hero-content">
          <span className="hero-label">PIDUODUO SALE</span>
          <h1>Покупай больше.<br />Плати меньше.</h1>
          <p>Любимые товары по выгодным ценам</p>
          <a href="#products" className="hero-button">
            Смотреть товары →
          </a>
        </div>
        <div className="hero-decoration">🛍️</div>
      </div>

      <div className="search-box">
        <span>⌕</span>
        <input placeholder="Искать товары, бренды..." />
        <button type="button">Найти</button>
      </div>

      <div className="category-strip">
        <button className="category active">Все товары</button>
        <button className="category">🔥 Хиты</button>
        <button className="category">Электроника</button>
        <button className="category">Для дома</button>
        <button className="category">Красота</button>
      </div>

      <div className="section-heading" id="products">
        <div>
          <span className="section-eyebrow">ВЫБИРАЙ ЛУЧШЕЕ</span>
          <h2>Популярные товары</h2>
        </div>
        <span className="product-count">{products.length} товаров</span>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            className="product-card"
            key={product.id}
          >
            <div className="product-image">
              <img src={product.thumbnail} alt={product.title} />
              {product.discountPercentage > 0 && (
                <span className="discount-badge">
                  −{Math.round(product.discountPercentage)}%
                </span>
              )}
              <button
                type="button"
                className="favorite"
                aria-label="Добавить в избранное"
                onClick={(event) => event.preventDefault()}
              >
                ♡
              </button>
            </div>

            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <h3>{product.title}</h3>

              <div className="rating">
                <span>★</span> {product.rating}
                <span className="stock">В наличии: {product.stock}</span>
              </div>

              <div className="product-bottom">
                <div className="price-block">
                  <span className="price">${product.price}</span>
                  <span className="old-price">
                    ${(product.price * (1 + product.discountPercentage / 100)).toFixed(2)}
                  </span>
                </div>
                <span className="add-cart">⇗</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
