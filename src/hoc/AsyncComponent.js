import React, { Component } from "react";

export default function asyncComponent(getComponent) {
  class AsyncComponent extends Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    UNSAFE_componentWillMount = async () => {
      if (!this.state.Component) {
        const component = await getComponent();

        AsyncComponent.Component = component;
        this.setState({ Component: component });
      }
    };

    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return <div>Loading...</div>;
    }
  }
  return AsyncComponent;
}
