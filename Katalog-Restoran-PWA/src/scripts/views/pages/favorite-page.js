import FavoriteRestoIdb from '../../data/resto-idb';
import createRestoLike from '../templates/favorite';

const favorite = {
  async render() {
    return `
        <h2>Favorite</h2>
        <section class="content">
            <div class="content-list">
              <h2>Explore Restaurant</h2>
              <div class="list" id="mcon"></div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestoIdb.getAllRestos();
    const favResto = document.querySelector('#mcon');

    if (restaurant.length === 0) {
      favResto.innerHTML = `
        Empty favorite Resto. Put one, by clicking heart button in the detail page.
      `;
    }

    restaurant.forEach((resto) => {
      favResto.innerHTML += createRestoLike(resto);
    });
  },
};

export default favorite;
