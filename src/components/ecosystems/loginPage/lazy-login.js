import { asyncComponent } from "hoc";

const LazyLogin = asyncComponent(() => {
  return import(
    /* webpackChunkName: "Login" */
    /* webpackMode: "lazy" */
    "./index"
  ).then(module => module.default);
});

export default LazyLogin;
