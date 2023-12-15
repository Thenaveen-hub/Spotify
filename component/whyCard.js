const template = document.createElement('template');
template.innerHTML = `
  <style>
    .why-card {
      display: flex;
      flex-direction: column;
    }
    .why-card img {
        width: 142px;
        height: 142px;
        margin: 0px auto 40px;
    }
    .why-card h6{
      font-size: 21px;
      padding: 0px;
      line-height: 1.3em;
      font-weight: 700;
      margin: 0 auto 10px auto;
    }
    .why-card p{
      line-height: 1.5;
      font-size: 16px;
      padding: 0px;
      margin: 0;
      font-weight: 400;
      margin: 0px auto;
    }   
  </style>
  <div class="why-card">
    <img />
    <h6></h6>
    <p></p>
  </div>
`;

class whyCard extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('img').src = this.getAttribute('image');
    this.shadowRoot.querySelector('h6').innerText = this.getAttribute('title');
    this.shadowRoot.querySelector('p').innerText = this.getAttribute('text');
  }
}

window.customElements.define('why-card', whyCard);