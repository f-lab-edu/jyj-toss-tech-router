const router = () => {
  const routes = [
    {
      path: "/",
      view: () => {
        console.log("main");
      },
    },
    {
      path: "/design",
      view: () => {
        console.log("design");
      },
    },
    {
      path: "/tech",
      view: () => {
        console.log("tech");
      },
    },
    {
      path: "/apply",
      view: () => {
        console.log("apply");
      },
    },
    {
      path: "/404",
      view: () => {
        console.log("Not Found");
      },
    },
  ];
  const Matches = routes.map((route) => {
    return {
      route,
      isMatch: route.path === location.pathname,
    };
  });
  console.log(Matches);
  let match = Matches.find((Match) => Match.isMatch);
  if (!match) {
    match = {
      route: routes[routes.length - 1],
      isMatch: true,
    };
  }
  console.log(match);
};
router();
