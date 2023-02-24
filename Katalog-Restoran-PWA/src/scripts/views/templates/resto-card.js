import CONFIG from '../../globals/config';

const createRestoCardTemplate = (restaurants) => `
<div class="list_item">
            <img class="list_item_thumb" src="${CONFIG.BASE_IMG_URL + restaurants.pictureId}" alt="${restaurants.name}" title="${restaurants.name}">
            <div class="city">${restaurants.city}</div>
            <div class="list_item_content">
                <p class="list_item_rating">
                    Rating : 
                    <a href="#" class="list_item_rating_value">${restaurants.rating}</a>
                </p>
                <h1 class="list_item_title"><a href="#/detail/${restaurants.id}">${restaurants.name}</a></h1>
                <div class="list_item_desc">${restaurants.description.slice(0, 100)}...</div>
            </div>
        </div>
`;

export default createRestoCardTemplate;
