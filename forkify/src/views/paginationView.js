import View from './View.js';
import icons from 'url:../img/icons.svg';

class paginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkupButton(type, page) {
    const direction = type === 'next' ? 'right' : 'left';
    return `
      <button data-goto="${page}" class="btn--inline pagination__btn--${type}">
          ${
            type === 'prev'
              ? `<svg class="search__icon"><use href="${icons}#icon-arrow-${direction}"></use></svg><span>Page ${page}</span>`
              : `<span>Page ${page}</span><svg class="search__icon"><use href="${icons}#icon-arrow-${direction}"></use></svg>`
          }
      </button>
    `;
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButton('next', curPage + 1);
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButton('prev', curPage - 1);
    }
    // Other page
    if (curPage < numPages) {
      return `
        ${this._generateMarkupButton('prev', curPage - 1)}
        ${this._generateMarkupButton('next', curPage + 1)}
      `;
    }

    // Page 1, and there are NO other pages
    return '';
  }
}

export default new paginationView();
