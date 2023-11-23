import Account from '../../Pages/Account';
import Bag from '../../Pages/Bag';
import Home from '../../Pages/Home';
import WishList from '../../Pages/wishList';

export const BOTTOM_NAVBARS = [
  {
    name: 'Home',
    icon: 'home',
    component: Home,
  },
  {
    name: 'Account',
    icon: 'user',
    component: Account,
  },
  {
    name: 'Wishlist',
    icon: 'heart',
    component: WishList,
  },
  {
    name: 'Bag',
    icon: 'shopping-bag',
    component: Bag,
  },
];
