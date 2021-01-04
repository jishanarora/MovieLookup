import React from 'react'
import {SidebarContainer,ClosedIcon,Icon,SidebarWrapper,SidebarLink,SidebarMenu, Greetings} from './sidebar.styles'
import {connect} from 'react-redux'
import {toggleSidebar} from '../../redux/sidebar/sidebar.actions'
import {createStructuredSelector} from 'reselect'
import {selectSidebarHidden} from '../../redux/sidebar/sidebar.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {auth} from '../../firebase/firebase.utils';
import {openNominations} from '../../redux/sidebar/sidebar.actions'

const Sidebar=({hideSidebar,toggleSidebar, currentUser, openModal})=>(
    <SidebarContainer hidden={hideSidebar}>
        <Icon onClick={toggleSidebar}>
            <ClosedIcon/>
        </Icon>
        <SidebarWrapper>
            <Greetings>{currentUser?(`Hello! ${currentUser.displayName}`).toUpperCase():null}</Greetings>
          <SidebarMenu>
              <SidebarLink to='/search' onClick={toggleSidebar}>Search</SidebarLink>
              <SidebarLink to='/search' onClick={()=>{openModal(); toggleSidebar();}}>Nominations</SidebarLink>
              {currentUser? <SidebarLink onClick={()=>{auth.signOut(); toggleSidebar();}}>Sign Out</SidebarLink>:<SidebarLink className="option" to="/sign-in" onClick={toggleSidebar}>
              Sign In
          </SidebarLink>}
          </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
)

const mapStateToProps= createStructuredSelector({
hideSidebar:selectSidebarHidden,
currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch =>({
    toggleSidebar: () => dispatch(toggleSidebar()),
    openModal: ()=> dispatch(openNominations())
})

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);