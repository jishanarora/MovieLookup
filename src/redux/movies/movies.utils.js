export const addNominationMovie = (nominations, nominationToAdd) => {
    const existingNominations= nominations.find(nomination=>nomination.imdbID===nominationToAdd.imdbID);

    if(!existingNominations){
    return [...nominations,nominationToAdd] 
    }

    return nominations;
};

export const removeNominationMovie = (nominations, nominationToRemove) => {
    const existingNomination= nominations.find(nomination=>nomination.imdbID===nominationToRemove.imdbID);

    if(existingNomination){
        return nominations.filter(nomination=>nomination.imdbID!==nominationToRemove.imdbID);
    }

    return nominations;
};

