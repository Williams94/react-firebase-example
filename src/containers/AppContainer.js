import * as Actions from '../store/actions/users';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../components/App/App';

function mapStateToProps(state) {
  return {
    results: state.users.results
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);