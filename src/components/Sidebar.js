import React, { Component } from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
export default class Sidebar extends Component {
  render() {
    return (
      <MenuList>
          <MenuItem className="text-center text-props">Vocab</MenuItem>
          <MenuItem className="text-center text-props">Categories</MenuItem>
      </MenuList>
    )
  }
}