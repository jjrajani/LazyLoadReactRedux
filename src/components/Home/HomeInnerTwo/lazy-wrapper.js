import { asyncComponent } from "hoc";
import { promiseTimeout } from "utils";

const LazyHomeInnerTwo = asyncComponent(() => {
  return promiseTimeout(resolve =>
    import(
      /* webpackChunkName: "HomeInnerTwo" */
      /* webpackMode: "lazy" */
      "./index"
    ).then(module => resolve(module.default))
  );
});

export default LazyHomeInnerTwo;
