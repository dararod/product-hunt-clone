import React from 'react';

import './Product.css';

function Product({
  id,
  title,
  description,
  imageUrl,
  username,
  avatar,
  upvotes,
  downvotes,
  upvoteProduct,
  downvoteProduct,
}) {
  const handleUpvote = () => upvoteProduct(id);
  const handleDownvote = () => downvoteProduct(id);

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
            <button onClick={handleUpvote}>
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
          <div className="upvote product_controller">
            <button onClick={handleDownvote}>
              <svg
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            </button>
            <span>{downvotes}</span>
          </div>
        </footer>
      </div>
    </li>
  );
}

export default Product;
