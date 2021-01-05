import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import SearchPage from './pages/searchPage/searchPage.components';
import {Switch, Route, Redirect} from 'react-router-dom';
import SignInSignUpPage from "./pages/signInSignUpPage/signInSignUpPage.component";
import {auth,createUserProfileDocument, storage} from './firebase/firebase.utils';
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user-actions';
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selectors'
import NavigationBar from './components/navigationBar/navigationBar.component'
import Sidebar from './components/navigationBar/sidebar.component';
import {setNominations} from './redux/movies/movies.actions'
import {setHomepageVideoUrl} from './redux/variables/variables.actions'
import {selectHomepageVideoUrl} from './redux/variables/variables.selectors'

class App extends React.Component {
 
  unsubscribeFromAuth = null;
 
  componentDidMount() {
    const { setCurrentUser, setNominations, setVideoLink} = this.props;
 
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

    storage.child('movielookup.mp4').getDownloadURL().then((url) => {
      setVideoLink(url);
    }).catch((error) => {
        console.log(error);
    })
 
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    const {videoLink} = this.props;
  return (
    <div>
      <NavigationBar/>
      <Sidebar/>
      <Switch>
        <Route exact path="/"  render={()=><Homepage videoUrl={videoLink}/>}></Route>
        <Route  path="/search" component={SearchPage}></Route>
        <Route exact path="/sign-in" render={()=> this.props.currentUser? (<Redirect to="/" />):(<SignInSignUpPage/>)}></Route>
      </Switch>
    </div>
  );
  }
}

const mapStateToProps=createStructuredSelector({
  currentUser: selectCurrentUser,
  videoLink: selectHomepageVideoUrl
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setNominations: (nominations) =>dispatch(setNominations(nominations)),
  setVideoLink: (url)=> dispatch(setHomepageVideoUrl(url))

})

export default connect(mapStateToProps,mapDispatchToProps)(App);
