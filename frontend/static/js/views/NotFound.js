import ViewComponent from "./ViewComponent.js";

class NotFound extends ViewComponent {
  constructor() {
    super();
  }

  render() {
    return `
      <h1>NotFound</h1>
      <p>You're viewing the NotFound</p>
    `;
  }
}

export default NotFound;
