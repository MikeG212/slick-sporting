import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  };
  
  render() {
    const { item } = this.props;
    return (<div></div>);
  }
}