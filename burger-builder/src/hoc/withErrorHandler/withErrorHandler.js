import React from 'react';
import Aux from '../Auxilary';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHanler = (WrappedComponent, axios) => {
    return class extends React.Component {
        state = {
            error: null
        };

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(
                res => res,
                error => {
                    this.setState({ error: error });
                }
            );
        }

        componentWillUnmount() {
            console.log(
                'Will Unmount',
                this.reqInterceptor,
                this.resInterceptor
            );
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.reqInterceptor);
        }

        errorConfirmedHanler = () => {
            this.setState({ error: null });
        };

        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHanler}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    };
};

export default withErrorHanler;
