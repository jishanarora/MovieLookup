import {updateNominations, auth} from '../../firebase/firebase.utils'

export const addNominationMovie = (nominations, nominationToAdd) => {
    var returnValue=null;
    const existingNominations= nominations.find(nomination=>nomination.imdbID===nominationToAdd.imdbID);

    if(!existingNominations){
    returnValue= [...nominations,nominationToAdd] 
    }
    else{
    returnValue= nominations;
    }

    updateNominations(auth.currentUser,returnValue);
   return returnValue;
}; 

export const removeNominationMovie = (nominations, nominationToRemove) => {
    var returnValue=null;
    const existingNomination= nominations.find(nomination=>nomination.imdbID===nominationToRemove.imdbID);

    if(existingNomination){
        returnValue= nominations.filter(nomination=>nomination.imdbID!==nominationToRemove.imdbID);
    }
    else{returnValue=nominations;}

    updateNominations(auth.currentUser,returnValue);

    return returnValue;
};


