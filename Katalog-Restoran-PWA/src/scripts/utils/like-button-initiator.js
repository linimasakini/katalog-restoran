import FavoriteMovieIdb from '../data/resto-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/like';

const LikeButtonInitiator = {
  async init({ likeButttonContainer, data }) {
    this._likeButtonContainer = likeButttonContainer;
    this._restaurant = data.restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    try {
      const { id } = this._restaurant;

      const restaurant = await FavoriteMovieIdb.getResto(id);

      if (restaurant) {
        this._renderliked();
      } else {
        this._renderlike();
      }
    } catch (err) {
      console.error(err);

      throw new Error(err);
    }
  },

  _renderlike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteMovieIdb.putResto(this._restaurant);
      // eslint-disable-next-line no-alert
      window.alert('Restaurant berhasil ditambahkan ke favorite');
      this._renderButton();
    });
  },

  _renderliked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteMovieIdb.deleteResto(this._restaurant.id);
      // eslint-disable-next-line no-alert
      window.alert('Restaurant berhasil dihapus dari favorite ');
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
