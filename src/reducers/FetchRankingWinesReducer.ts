/**
 * Define a reducer for fetching ranking wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { ActionTypes } from 'actions'
import * as Redux from 'redux'
import { initWines, IWineState } from 'states/WineState'

/**
 * Reducer for fetching ranking wines
 */
const FetchRankingWinesReducer: Redux.Reducer<IWineState> = (
    state = initWines,
    action: Redux.AnyAction
) => {
    switch (action.type) {
        case ActionTypes.FETCH_RANKING_WINES_SUCCESS:
            return {
                ...state,
                wines: action.items
            }
        case ActionTypes.FETCH_FAILURE:
        default:
            return state
    }
}

export default FetchRankingWinesReducer
