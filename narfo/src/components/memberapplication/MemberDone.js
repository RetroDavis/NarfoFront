import React, { Component } from 'react'
import ArrowBack from '@material-ui/icons/Check';
export default class MemberDone extends Component {
  render() {
    return (
      <div>
        <h1>Thank you for joining</h1>
       <ArrowBack style={{ fontSize: 100,color: '#6BC20A'}}></ArrowBack>
      </div>
    )
  }
}
