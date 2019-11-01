import { asyncComponent } from "hoc";
import { promiseTimeout } from "utils";

const LazyHome = asyncComponent(() => {
  // Example of some loading time.
  return promiseTimeout(resolve =>
    import(
      /* webpackChunkName: "Home" */
      /* webpackMode: "lazy" */
      "./Home"
    ).then(module => resolve(module.default))
  );
});

export default LazyHome;

// How we will actually use import()
// return import(
//   /* webpackChunkName: "Home" */
//   /* webpackMode: "lazy" */
//   "./Home"
// ).then(module => module.default);
