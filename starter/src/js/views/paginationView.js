import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _genarateMarkup() {
    const curPage = this._data.page;
    const numPage = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    //Page 1, and there are other pages
    if (curPage === 1 && numPage > 1) {
      return `
        <button data-goto='${
          curPage + 1
        }' class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
         </button>
      `;
    }

    //Last Page
    if (curPage === numPage && numPage > 1) {
      return `
         <button data-goto='${
           curPage - 1
         }' class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>
      `;
    }

    //Other Page
    if (curPage < numPage) {
      return `
        <button data-goto='${
          curPage - 1
        }' class="btn--inline pagination__btn--prev">
           <svg class="search__icon">
             <use href="${icons}#icon-arrow-left"></use>
           </svg>
           <span>Page ${curPage - 1}</span>
        </button>
        <button data-goto='${
          curPage + 1
        }' class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
     `;
    }

    //Page 1, and there are NO other pages
    return '';
  }
}

export default new PaginationView();
