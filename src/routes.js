import { META } from './config';
import Login from './containers/Login';
import Index from './containers/Index';
import Orders from './containers/Orders';
import SignUpForm from './components/SignUpForm';
import ProductList from './containers/ProductList';
import Cart from "./containers/Cart";
import Checkout from './containers/Checkout';
import Product from './containers/Product';

/**
 * Generate an object with all necessary fields to render a page.
 * @param {string} path - The page path
 * @param {string} title - THe page title (for SEO)
 * @param {Function} component - The component to be rendered. Containers can also be used
 * @param {string} description - The page description (for SEO) [OPTIONAL]
 * @param {string} keywords - The comma separated page keywords (for SEO) [OPTIONAL]
 * @returns {object}
 */
const createPage = (path, title, component, description, keywords) => ({
  path,
  title: `${title} | ${META.PAGE_TITLE_SUFFIX}`,
  description: description || META.PAGE_DESCRIPTION,
  keywords: keywords || META.PAGE_KEYWORDS,
  component
});

export default [
  createPage('/login', 'Login', Login),
  createPage('/signup', 'Sign Up', SignUpForm),
  createPage('/products', 'Products', ProductList),
  createPage('/product_details/:id', 'Products', Product),
  createPage('/viewcart', 'Cart', Cart),
  createPage('/checkout', 'Checkout', Checkout),
  createPage('/orders', 'Orders', Orders),
  createPage('/', 'Index', Index)
];
