import ViewComponent from "./ViewComponent.js";

class Design extends ViewComponent {
  constructor() {
    super();
  }

  render() {
    return `
      <h1>Design</h1>
      <p>You're viewing the Design</p>
    `;
  }
}

export default Design;
