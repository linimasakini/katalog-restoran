import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
<div class="item judul" style="
padding-top: 50px;
padding-left: 50px;
padding-right: 50px;
padding-bottom: 50px;
">
<h1>Detail Pages</h1>
</div>
<div class="containers">
  <div class="item image" style="    padding-left: 10px;
  padding-top: 3px;
  padding-right: 10px;
  padding-bottom: 0px;">
    <a href="#/detail/${resto.id}"><img id="imaged" src="${CONFIG.BASE_IMG_URL + resto.pictureId}" alt=""></a>
  </div>
  <div class="item contents" style="
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
">
  <h2 id="namers">${resto.name}</h2>
  </div>
  <div class="item description" style="
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 50px;
  padding-bottom: 100px;
">  <p>${resto.description}</p>
  </div>
</div>
<div class="mains">
  <div class="makanan">
    <ul>
    <h3>Makanan</h3>
    ${resto.menus.foods
    .map(
      (food, i) => `
                <li><p>${i + 1}) ${food.name}</p></li>
              `,
    )
    .join('')}
    </ul>
  </div>
  <div class="minuman">
    <ul>
    <h3>Minuman</h3>
    ${resto.menus.drinks
    .map(
      (drink, i) => `
                      <li><p>${i + 1}) ${drink.name}</p></li>
                    `,
    )
    .join('')}
    </ul>
  </div>
  <div class="info">
  <h3>Alamat</h3>
  <p>${resto.address}</p>
  <h3>Kota</h3>
  <p>${resto.city}</p>
  <h3>Rating</h3>
  <p>${resto.rating}</p>
  <h3>Tema Resto</h3>
  <p>${resto.categories.map((categories) => `<p id="p">${categories.name}</p>`).join('')}</p>
  </div>
</div>
<div class="submission">
  <div class="review">
  <h3 id="mid">Apa kata reviewers</h3>
      ${resto.customerReviews
    .map(
      (review) => `
          <div class="review-item">
            <div class="review-header">
              <h4>${review.name}</h4>
              <p>${review.date}</p>
            </div>
            <div class="review-main">
          ${review.review}
            </div>
          </div>`,
    )
    .join('')}
  </div>
  <div class="isi">
    <h3 id="mid" class="reviu">Isi Reviewmu</h3>
    <table>
    <tr>
    <td>Nama :</td>
    <td> <input id="input" type="text" placeholder="Masukkan Namamu"></td>
    </tr>
    <tr>
    <td>Isi Reviewmu :</td>
    <td> <input id="input" type="text" placeholder="Masukkan Reviewmu"></td>
    </tr>
    <tr>
    <td></td>
    <td>    <input type="button" value="Submit" id="buttonn"></td>
    </tr>
    </table>

  </div>
</div>
`;

export default createRestoDetailTemplate;
