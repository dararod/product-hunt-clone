import React from 'react';

import './Product.css';

function Product({ title, description, imageUrl, username, avatar, upvotes }) {
  return (
    <li className="product">
      <figure className="preview">
        <img src={imageUrl} alt={`${title} sample image`} />
      </figure>
      <div className="info">
        <main>
          <h2>{title}</h2>
          <p>{description}</p>
        </main>
        <footer>
          <div className="user product_controller">
            <figure className="avatar">
              <img src={avatar} alt="" height="40" width="40" />
            </figure>
            <span className="username">{username}</span>
          </div>
          <div className="upvote product_controller">
            <button>
              <svg
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                />
              </svg>
            </button>
            <span>{upvotes}</span>
          </div>
        </footer>
      </div>
    </li>
  );
}

export default Product;
