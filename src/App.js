import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import SearchPage from './pages/searchPage/searchPage.components';
import {Switch, Route, Redirect} from 'react-router-dom';
import SignInSignUpPage from "./pages/signInSignUpPage/signInSignUpPage.component";
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user-actions';
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selectors'
import NavigationBar from './components/navigationBar/navigationBar.component'
import Sidebar from './components/navigationBar/sidebar.component';
import {setNominations} from './redux/movies/movies.actions'

class App extends React.Component {
 
  unsubscribeFromAuth = null;
 
  componentDidMount() {
    const { setCurrentUser, setNominations } = this.props;
 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
 
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });

          setNominations(snapShot.data().nominations);
        });
      }
 
      setCurrentUser(userAuth);
    });
  }
 
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div>
      <NavigationBar/>
      <Sidebar/>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route  path="/search" component={SearchPage}></Route>
        <Route exact path="/sign-in" render={()=> this.props.currentUser? (<Redirect to="/" />):(<SignInSignUpPage/>)}></Route>
      </Switch>
    </div>
  );
  }
}

const mapStateToProps=createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setNominations: (nominations) =>dispatch(setNominations(nominations))

})

export default connect(mapStateToProps,mapDispatchToProps)(App);
