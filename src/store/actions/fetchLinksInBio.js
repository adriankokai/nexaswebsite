import * as actionTypes from './actionTypes';
import axios from 'axios'

export const fetchLinksInBioStart = () => {
    return {
        type: actionTypes.FETCH_LINKSINBIO_START
    }
}

export const fetchLinksInBioSuccess = linksInBio => {
    return {
        type: actionTypes.FETCH_LINKSINBIO_SUCCESS,
        linksInBio: linksInBio
    }
}

export const fetchLinksInBioFail = error => {
    return {
        type: actionTypes.FETCH_LINKSINBIO_FAIL,
        error: error
    }
}

export const fetchLinksInBio = () => {
    return dispatch => {
        dispatch(fetchLinksInBioStart());
        axios.get(BACKEND_URL + 'linksInBio/',)
        .then(res => {
            
        })
    }
}