import RestodbSource from '../../data/restodb-source';
import createRestoCardTemplate from '../templates/resto-card';
import Spinner from '../templates/spinner';

const Home = {
  async render() {
    return `
    <div class="content">
    <div id="loading"></div>

    <div class="content-list">
      <h2>Explore Restaurant</h2>
      <div class="list" id="mcon"></div>
    </div>
  </div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const mainContainer = document.querySelector('.content-list');
    const containerList = document.querySelector('#mcon');

    mainContainer.style.display = 'none';
    loading.innerHTML = Spinner();

    try {
      const restos = await RestodbSource.getRestaurantList();

      restos.restaurants.forEach((restaurant) => {
        containerList.innerHTML += createRestoCardTemplate(restaurant);
      });

      loading.style.display = 'none';
      mainContainer.style.display = 'block';
    } catch (err) {
      console.error(err);
    }
  },

};
export default Home;
