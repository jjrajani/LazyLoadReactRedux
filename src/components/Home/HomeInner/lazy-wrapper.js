import { asyncComponent } from "hoc";
import { promiseTimeout } from "utils";

const LazyHomeInner = asyncComponent(() => {
  return promiseTimeout(resolve =>
    import(
      /* webpackChunkName: "HomeInner" */
      /* webpackMode: "lazy" */
      "./index"
    ).then(module => resolve(module.default))
  );
});

export default LazyHomeInner;
