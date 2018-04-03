import React from 'react';
import {
  NavBar, Icon
} from 'antd-mobile';
import moment from 'moment';

import styles from './Battery.less'


class Battery extends React.Component {

  state = {
    'progress':100,
    'pass':0,

  }

  render() {

    return (
      <div className={styles.batteryWrap}>
        <div className={styles.batteryTitle}>2018已经过了 {this.state.pass} % </div>
        <div className={styles.battery}>
          <div className={styles.electric} style={{width:this.state.progress+'%'}}>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.init();
  }

  init=()=>{
    let date1 = new Date(); //开始时间
    date1.setFullYear(2018, 0, 1)

    let date2 = new Date(); //结束时间
    let date3 = date2.getTime() - date1.getTime()
    let days = Math.floor(date3 / (24 * 3600 * 1000))

    // calculation progress
    let dayCount = days;
    let pass = (dayCount / 365 * 100).toFixed(2);
    let progress = 100 - pass;

    this.setState({
      'pass':pass,
      'progress': progress
    });

  }
}

export default Battery;
