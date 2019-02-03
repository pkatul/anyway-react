/**
 * Define a reducer for fetching countries
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { ActionTypes } from 'actions'
import * as Redux from 'redux'
import { ICountry } from 'states/ICountry'

/**
 * Reducer for fetching countries
 */
const FetchCountriesReducer: Redux.Reducer<ICountry[]> = (
    state = [],
    action: Redux.AnyAction
) => {
    switch (action.type) {
        case ActionTypes.FETCH_COUNTRIES_SUCCESS:
            return action.items
        case ActionTypes.FETCH_FAILURE:
        default:
            return state
    }
}

export default FetchCountriesReducer
