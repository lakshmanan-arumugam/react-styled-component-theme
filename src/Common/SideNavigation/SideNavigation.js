import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const Nav = styled.aside `
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 280px;
  background-color: ${props => props.theme.sideNavbgColor};
  z-index: 3;
`;

const Logo = styled(NavLink) `
  padding: 0px 25px;
  font-size: 32px;
  color: ${props => props.theme.textBrand};
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  margin-top: 14px;
  margin-bottom: 28px;
`;

const NavUl = styled.ul `
  list-style:none;
  margin: 0;
  padding: 0 25px;
`;

const NavList = styled.li `
  margin-bottom: 10px;
`;

const Link = styled(NavLink) `
  text-decoration: none;
  color: ${props => props.theme.link};
  font-size: 1rem;
  display: block;
  padding: 6px 0;

  &:hover {
    color: ${props => props.theme.linkHover};
  }
  
  &.active {
    color: ${props => props.theme.linkActive};
  }
`;

const CreateButton = styled(NavLink)`
  padding: 10px 23px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  background-color: ${props => props.theme.buttonPrimaryBgColor};
  color: white;
  font-weight: 400;
  letter-spacing: 0.3px;
  margin: 0 20px 22px 20px;
  cursor: pointer;
  outline: 0;
  display: inline-block;
  text-decoration: none;

  &:hover {
    background-color: ${props => props.theme.buttonPrimaryBgColorHover} ;
  }
`;

class SideNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Nav>
        <Logo to="/directory">My Diaries</Logo>
        <CreateButton to="/directory/new">Create a article</CreateButton>
        <NavUl>
          <NavList>
            <Link to="/directory" 
              isActive={(match, location) => {
                return location.pathname.indexOf("directory") !== -1;
              }}
              exact={true}>Directory</Link>
          </NavList>  
          <NavList>
            <Link to="/favourites">Starred</Link>
          </NavList>
          {/* <NavList>
            <Link to="/tags">Tags</Link>
          </NavList> */}
        </NavUl>
      </Nav>
    );
  }
}
 
export default SideNavigation;