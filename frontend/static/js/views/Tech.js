import ViewComponent from "./ViewComponent.js";

class Tech extends ViewComponent {
  constructor() {
    super();
  }

  render() {
    return `
      <h1>Tech</h1>
      <p>You're viewing the Tech</p>
    `;
  }
}

export default Tech;
