import * as Actions from '../store/actions/users';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../components/App/App';

mapStateToProps = (state) => {
  return {
    users: state.users.results !== null ? state.users.results : 'loading...'
  }
};

mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
