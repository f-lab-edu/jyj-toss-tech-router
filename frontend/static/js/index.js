import Design from "./views/Design.js";
import Tech from "./views/Tech.js";
import Apply from "./views/Apply.js";
import NotFound from "./views/NotFound.js";

const router = () => {
  const routes = [
    {
      path: "/",
      view: Tech,
    },
    {
      path: "/design",
      view: Design,
    },
    {
      path: "/tech",
      view: Tech,
    },
    {
      path: "/apply",
      view: Apply,
    },
    {
      path: "/404",
      view: NotFound,
    },
  ];
  const Matches = routes.map((route) => {
    return {
      route,
      isMatch: route.path === location.pathname,
    };
  });

  let match = Matches.find((Match) => Match.isMatch);
  if (!match) {
    match = {
      route: routes[routes.length - 1],
      isMatch: true,
    };
  }

  const view = new match.route.view();
  document.querySelector("#app").innerHTML = view.render();
};
window.addEventListener("popstate", router); // 뒤로가기, 앞으로가기인 경우 url 이동 처리

document.body.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();

    history.pushState(null, null, e.target.href); //클릭해서 url 이동
    router();
  }
});
router();
