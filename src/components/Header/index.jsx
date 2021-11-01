import React from 'react';

import './Header.css';

function Header({ title, description, imageUrl, username, avatar, upvotes }) {
  return (
    <header id="application-header">
      <h1>DeveloperBreakfast</h1>
    </header>
  );
}

export default Header;
