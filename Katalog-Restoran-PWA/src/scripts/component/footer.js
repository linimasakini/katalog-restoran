class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
        <p class="fot">&copy; Created by Akhmad Nurhadi</p>
        </footer>
        `;
  }
}

customElements.define('footer-create', Footer);
