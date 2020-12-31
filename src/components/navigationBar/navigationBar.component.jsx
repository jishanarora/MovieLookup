import React from 'react'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavLinks,NavItem} from './navigationBar.styles'
import {FaBars} from 'react-icons/fa'
import {connect} from 'react-redux';
import {toggleSidebar} from '../../redux/sidebar/sidebar.actions'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {createStructuredSelector} from 'reselect';
import {auth} from '../../firebase/firebase.utils';



const NavigationBar=({toggleSidebar,currentUser})=>(
   <Nav>
       <NavbarContainer>
        <NavLogo to="/" >Movie Lookup</NavLogo> 
        <MobileIcon onClick={toggleSidebar}>
            <FaBars/>
        </MobileIcon>
        <NavMenu>
            <NavItem>
                <NavLinks to='/about'>About</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='/search'>Search</NavLinks>
            </NavItem>
            {currentUser?
            <NavItem>
             <NavLinks onClick={()=>auth.signOut()}>Sign Out</NavLinks></NavItem>
             :
             <NavItem>
             <NavLinks to="/sign-in">Sign In </NavLinks></NavItem>}
        </NavMenu>
       </NavbarContainer>
   </Nav>
)

const mapDispatchToProps = dispatch =>({
    toggleSidebar: () => dispatch(toggleSidebar())
})

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    })

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);