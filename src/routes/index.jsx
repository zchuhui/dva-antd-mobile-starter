import React from 'react';
import PropTypes from 'prop-types';
import {
  connect
} from 'dva';

import styles from './index.less';

import Main from '../layouts/main.jsx';

class Index extends React.Component{

  render(){

  const {location} = this.props;

    return (
      <Main location={location}>
        <div className={styles.normal}>
          999
        </div>
      </Main>
    );
  }
}

Index.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Index);
