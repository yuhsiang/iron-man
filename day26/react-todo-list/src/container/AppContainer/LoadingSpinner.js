import React from 'react'

import { Fade } from 'reactstrap';

class LoadingSpinner extends React.Component {
  state = {
    displaying: false,
  }
  finish = () => {
    console.log('exist')
    this.setState({
      displaying: false,
    })
  }
  start = () => {
    this.setState({
      displaying: true,
    })
  }
  render() {
    const {
      isLoading,
    } = this.props;

    const {
      displaying,
    } = this.state;
    return (
      <Fade timeout={400} in={isLoading} onEnter={this.start} onExited={this.finish} tag="h5" className="mt-3">
        {displaying && 'loading...'}
      </Fade>
    )
  }
}
export default LoadingSpinner;
