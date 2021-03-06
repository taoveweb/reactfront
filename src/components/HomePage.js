import React  from 'react';
import {Link,withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Actions from '../actions';
const $ = require('jquery');

class HomePage extends React.Component {


  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $('.loading').remove();
  }
  render() {
    return (
      <div>
        <h1>React Slingshot</h1>

        <h2>Get Started</h2>
        <ol>
          <li>Review the <Link to="fuel-savings">demo app</Link></li>
          <li>Remove the demo and start coding: npm run remove-demo</li>
        </ol>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    shareReducer: state.shareReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage));
