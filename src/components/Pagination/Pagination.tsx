import React from 'react';
import './Pagination.scss';

type Props = {
  pageApi: number;
  setPageApi: (num: number) => void;
};

export const Pagination: React.FC<Props> = ({ pageApi, setPageApi }) => {
  const pageNumbers = [];

  for (let i = 1; i <= 10; i += 1) {
    pageNumbers.push(i);
  }

  const buttonPrev = (num: number) => {
    return num - 1 <= 0 ? 1 : num - 1;
  };

  return (
    /* eslint-disable */
    <div className="App__pagination pagination">
      <button
        className={pageApi <= 1
          ? 'pagination__button btn btn-secondary disabled'
          : 'pagination__button btn btn-dark'}
        type="button"
        onClick={() => setPageApi(buttonPrev(pageApi))}
      >
        Prev
      </button>
      <ul className="pagination__list pagination">
        {pageNumbers.map((number) => (
          <li
            className={number === pageApi
              ? 'pagination__item page-item active'
              : 'pagination__item page-item'}
            key={number}
          >
            <a
              href="#"
              className="pagination__link page-link"
              onClick={() => setPageApi(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
      <button
        className={pageApi >= 10
          ? 'pagination__button btn btn-secondary disabled'
          : 'pagination__button btn btn-dark'}
        type="button"
        onClick={() => setPageApi(pageApi + 1)}
      >
        Next
      </button>
    </div>
  );
};
