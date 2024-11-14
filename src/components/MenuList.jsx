import { FaHeart, FaBook, FaUsers, FaUtensils } from 'react-icons/fa'; // Import necessary icons from react-icons

const menuItems = [
  {
    name: 'Recipes',
    icon: <FaUtensils />,
  },
  {
    name: 'Favorites',
    icon: <FaHeart className='text-current ' />,
  },
  {
    name: 'Courses',
    icon: <FaBook />,
  },
  {
    name: 'Communities',
    icon: <FaUsers />,
  },
];

const MenuList = () => {
  return (
    <ul >
      {menuItems.map((item, index) => (
        <li key={index} className="flex items-center space-x-2 max-w-28 opacity-35 hover:opacity-100 transition-transform transform hover:scale-110">
          <span className='text-current hover:text-red-600'>{item.icon}</span>
          <span className='text-sm font-mono py-1 font-bold   '>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
