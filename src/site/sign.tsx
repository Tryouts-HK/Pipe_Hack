import React from 'react';
import { useNavigate } from 'react-router-dom';

type LinkItem = {
  name: string;
  link: string;
};

type ButtonLinkProps = {
  links: LinkItem[];
};

const ButtonLink: React.FC<ButtonLinkProps> = ({ links }) => {
  const navigate = useNavigate();

  const handleButtonClick = (link: string) => {
    navigate(link);
  };

  return (
    <div>
      {links.map((linkItem, index) => (
        <button
        key={index}
        onClick={() => handleButtonClick(linkItem.link)}
        className="p-3 m-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transform transition-transform duration-200 hover:scale-105"
      >
        {linkItem.name}
      </button>
      ))}
    </div>
  );
};

export default ButtonLink;

// Example usage of the component
export const Buttons: React.FC = () => {
  const links = [
    { name: 'Admin Login', link: '/login/admin' },
    { name: 'Admin SignUp', link: '/register/admin' },
    { name: 'User Login', link: '/login' },
    { name: 'User SignUp', link: '/register' },
    { name: 'Volunteer Login', link: '/login/srv' },
    { name: 'Volunteer SignUp', link: '/register/srv' },
  ];

  return (
    <div>
      <h1 className='text-3xl font-semibold mb-6'>Navigation Buttons</h1>
      <ButtonLink links={links} />
    </div>
  );
};
