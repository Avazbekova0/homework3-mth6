import { Link, useParams } from 'react-router-dom';
import { useProduct } from '../../products/useProducts';

export const DetailsPage = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useProduct(id);

  if (isLoading) {
    return <p className="status">Загрузка товара...</p>;
  }

  if (isError) {
    return (
      <section className="details-container">
        <Link to="/" className="back-link">← Назад в каталог</Link>
        <p className="error">Не удалось загрузить товар.</p>
      </section>
    );
  }

  if (!product) {
    return <p className="status">Товар не найден.</p>;
  }

  return (
    <section className="details-container">
      <Link to="/" className="back-link">← Продолжить покупки</Link>

      <div className="details-card">
        <div className="details-gallery">
          <div className="details-main-image">
            <img src={product.thumbnail} alt={product.title} />
            <span className="details-discount">
              −{Math.round(product.discountPercentage)}%
            </span>
          </div>

          <div className="gallery-caption">
            <span>PIDUODUO</span>
            <span>Оригинальные фотографии товара</span>
          </div>
        </div>

        <div className="details-info">
          <span className="details-category">{product.category}</span>

          <h1>{product.title}</h1>

          <div className="details-rating">
            <span>★</span> {product.rating}
            <span>·</span>
            <span>{product.stock > 0 ? 'В наличии' : 'Нет в наличии'}</span>
          </div>

          <div className="details-price-box">
            <span className="details-price">${product.price}</span>
            <span className="details-old-price">
              ${(product.price * (1 + product.discountPercentage / 100)).toFixed(2)}
            </span>
            <span className="details-save">
              Скидка {Math.round(product.discountPercentage)}%
            </span>
          </div>

          <div className="delivery-info">
            <span>🚚</span>
            <div>
              <strong>Информация о доставке</strong>
              <p>Срок и стоимость уточняются при оформлении заказа.</p>
            </div>
          </div>

          <div className="details-description">
            <h2>Описание товара</h2>
            <p>{product.description}</p>
          </div>

          <div className="details-specs">
            <div>
              <span>Категория</span>
              <strong>{product.category}</strong>
            </div>
            <div>
              <span>Бренд</span>
              <strong>{product.brand || 'Не указан'}</strong>
            </div>
            <div>
              <span>Остаток</span>
              <strong>{product.stock} шт.</strong>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
