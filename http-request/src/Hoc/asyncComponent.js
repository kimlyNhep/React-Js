import React from 'react';

const asyncComponent = importComponent => {
    return class extends React.Component {
        state = {
            component: null
        };

        componentWillMount() {
            importComponent.then(cmp => {
                this.setState({ component: cmp.default });
            });
        }

        render() {
            const imCom = this.state.component;
            return imCom ? <imCom {...this.props} /> : null;
        }
    };
};

export default asyncComponent;
