import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Badge } from 'lucide-react';

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        isActive
          ? 'bg-gray-100 text-gray-900'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {children}
    </Link>
  );
};

const IconButton = ({
  icon: Icon,
  to = '#',
}: {
  icon: React.ElementType;
  to?: string;
}) => (
  <Link
    to={to}
    className="p-2 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none"
  >
    <Icon size={20} />
  </Link>
);

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Badge />
            <span className="ml-2 text-xl font-bold">Kora</span>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <IconButton icon={ShoppingCart} to="/cart" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
