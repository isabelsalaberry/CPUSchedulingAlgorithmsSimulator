import React from 'react';
import {Link} from "react-router-dom";

export function NavBar() {
  const [activeItem, setActiveItem] = React.useState('');

  return (
    <nav className="bg-blue-900 bg-opacity-20 p-4 rounded-xl">
      <ul className="flex justify-between">
        <li>
          <Link to="/fifo" className={`text-black font-semibold ${activeItem === 'fifo' ? 'active' : ''}`}>
            First-In-First-Out
          </Link>
        </li>
        <li>
          <Link to="/sjf" className={`text-black font-semibold ${activeItem === 'sjf' ? 'active' : ''}`}>
            Shortest Job First
          </Link>
        </li>
        <li>
          <Link to="/pnp" className={`text-black font-semibold ${activeItem === 'pnp' ? 'active' : ''}`}>
            Priorities no Preemptive
          </Link>
        </li>
        <li>
          <Link to="/pp" className={`text-black font-semibold ${activeItem === 'pp' ? 'active' : ''}`}>
            Priorities Preemptive
          </Link>
        </li>
        <li>
          <Link to="/rr" className={`text-black font-semibold ${activeItem === 'rr' ? 'active' : ''}`}>
            Round Robin
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
