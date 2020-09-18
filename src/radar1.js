import React, { Component } from 'react';
import Page from './index.html';
var htmlDoc = {__html: Page};

export default class Doc extends Component {
  constructor(props){
    super(props);
  }

  render(){
     return (<div dangerouslySetInnerHTML={htmlDoc} />)
}}