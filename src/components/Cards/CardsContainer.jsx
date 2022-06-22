import React from 'react';
import Cards from './Cards';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        flats: state.flats,
        newFlatName: state.flats.newFlatName
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
};

const CardsContainer = connect(mapStateToProps, mapDispatchToProps)(Cards);

export default CardsContainer;