import React from 'react'

import styled from 'styled-components'
import { AccountCircle, ShoppingCart, Search, Menu,Close } from '@material-ui/icons'
import {NavLink} from 'react-router-dom';
import { useState } from 'react';




function Navbar() {
    const [burgerNav, setStatus] = useState(false);
    
    return (
        
        <MainNav>
            <LeftNav>
                <h1>Burganic</h1>
            </LeftNav>
           
            <MenuItems show={burgerNav}>
                <ul>
                    <li><NavLink to="/">
                        Home
                        </NavLink>
                    </li>
                    <li><NavLink to="/Menu">
                        Menu
                        </NavLink>
                    </li>
                    <li><NavLink to="/About">
                        About
                        </NavLink>
                    </li>
                    <li><NavLink to="/Book-Table">
                        Book Table
                        </NavLink>
                    </li>
                
                </ul>
            </MenuItems>
                
            <RightNav>
                <Account />
                <ShoppingBag/>
                <SearchIcon />
               {!burgerNav && 
               <CustomMenu onClick={() => setStatus(true) }/>}
               {burgerNav && <CloseBtn onClick ={() => setStatus(false)}/>}

                <Button><NavLink to="/order-now">Order Now</NavLink></Button>
            </RightNav>
        </MainNav>
            
          
        
    )
}
const MainNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

`
const LeftNav  = styled.div`
     h1{
        cursor:pointer;
     }
   

`

const MenuItems = styled.div`
    
     display: ${props => !props.show ? "none" : " "};
     
    
     a {
        text-decoration: none;
        color: #000;
      };
      li {
        list-style: none;
        font-size: 20px;
        background-color:#fa7f28da;
        padding:20px;
      };
      ul{
        position:fixed;
        z-index:10;
        top:80px;
        left:0;
        right:0;
        text-align:center;
      }
      

     
     
    
`
const RightNav = styled.div`
     display: flex;
     justify-content:space-between;
     align-items: center;
     margin-right: 10px;
     width: 40%;

`
const Button = styled.button`
     padding:10px 20px;
     font-size:12px;
     border-radius:8px;
     border-style:none;
     background-color: #fa8128;
     a {
        text-decoration: none;
        color: #fff;
      }
     
`
const Account = styled(AccountCircle)`
   cursor:pointer;
    
`
const ShoppingBag = styled(ShoppingCart)`
    cursor: pointer;
    
`
const SearchIcon = styled(Search)`
        cursor: pointer;
`
const CustomMenu = styled(Menu)`
        cursor: pointer
`
const CloseBtn = styled(Close)`
     cursor: pointer
`

export default Navbar
