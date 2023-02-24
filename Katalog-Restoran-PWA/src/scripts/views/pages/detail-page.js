import RestaurantSource from '../../data/restodb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import createRestoDetailTemplate from '../templates/detail';
import Spinner from '../templates/spinner';

const detail = {
  async render() {
    return `
    <div class="container">
    <div id="loading"></div>
    <div id="likeButtonContainer"></div>
        <div id="main-container">
        <div id="resto" class="resto"></div>
        </div>
      </div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveWithoutCombiner();

    const restoContainer = document.querySelector('#resto');
    const mainContainer = document.querySelector('#main-container');
    const loading = document.querySelector('#loading');

    mainContainer.style.display = 'none';
    loading.innerHTML = Spinner();

    try {
      const data = await RestaurantSource.getRestaurantDetail(url.id);

      console.info(data);
      restoContainer.innerHTML += createRestoDetailTemplate(data.restaurant);

      LikeButtonInitiator.init({
        likeButttonContainer: document.querySelector('#likeButtonContainer'),
        data,
      });

      mainContainer.style.display = 'block';
      loading.style.display = 'none';
    } catch (err) {
      console.error(err);
      mainContainer.style.display = 'block';
      loading.style.display = 'none';
      restoContainer.innerHTML = `Error: ${err.message}`;
    }
  },
};

export default detail;
