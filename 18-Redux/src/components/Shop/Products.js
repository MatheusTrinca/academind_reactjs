import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'My First Book',
    price: 6,
    description: 'The first book that i wrote',
  },
  {
    id: 'p2',
    title: 'My Second Book',
    price: 5,
    description: 'The second book that i wrote',
  },
];

const Products = props => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
