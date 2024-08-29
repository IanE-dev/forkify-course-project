import View from './View';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage =
    'No bookmark yet. Please find a nice recipe and bookmark it ;)s';
  _message;

  addHandlerBookmarks(handler) {
    window.addEventListener('load', handler);
  }

  _genarateMarkup() {
    console.log(this._data);
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }

  //   _generateMarkupPreview(results) {
  //     const id = window.location.hash.slice(1);
  //     return `
  //     <li class="preview">
  //             <a class="preview__link ${
  //               results.id === id ? 'preview__link--active' : ''
  //             }" href="#${results.id}">
  //               <figure class="preview__fig">
  //                 <img src="${results.image}" alt="${results.title}" />
  //               </figure>
  //               <div class="preview__data">
  //                 <h4 class="preview__title">${results.title}</h4>
  //                 <p class="preview__publisher">${results.publisher}</p>

  //               </div>
  //             </a>
  //           </li>
  //     `;
  //   }
}

export default new BookmarksView();
