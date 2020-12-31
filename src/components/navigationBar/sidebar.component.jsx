import React from 'react'
import {SidebarContainer,ClosedIcon,Icon,SidebarWrapper,SidebarLink,SidebarMenu} from './sidebar.styles'
import {connect} from 'react-redux'
import {toggleSidebar} from '../../redux/sidebar/sidebar.actions'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/sidebar/sidebar.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {auth} from '../../firebase/firebase.utils';

const Sidebar=({hideSidebar,toggleSidebar, currentUser})=>(
    <SidebarContainer hidden={hideSidebar}>
        <Icon onClick={toggleSidebar}>
            <ClosedIcon/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
              <SidebarLink to='/about' onClick={toggleSidebar}>About</SidebarLink>
              <SidebarLink to='/search' onClick={toggleSidebar}>Search</SidebarLink>
              {currentUser? <SidebarLink onClick={()=>auth.signOut(), toggleSidebar}>Sign Out</SidebarLink>:<SidebarLink className="option" to="/sign-in" onClick={toggleSidebar}>
              Sign In
          </SidebarLink>}
          </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
)

const mapStateToProps= createStructuredSelector({
hideSidebar:selectCartHidden,
currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch =>({
    toggleSidebar: () => dispatch(toggleSidebar())
})

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);