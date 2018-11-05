/**
 * Define a root reducer for Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { combineReducers } from 'redux'
import { IState } from '../states'
import FetchCountriesReducer from './FetchCountriesReducer'
import FetchImportersReducer from './FetchImportersReducer'
import FetchNewWinesReducer from './FetchNewWinesReducer'
import FetchRankingWinesReducer from './FetchRankingWinesReducer'
import FilterWinesReducer from './FilterWinesReducer'

/**
 * Root reducer
 */
const rootReducer = combineReducers<IState>({
    countries: FetchCountriesReducer,
    filteredWines: FilterWinesReducer,
    importers: FetchImportersReducer,
    newWines: FetchNewWinesReducer,
    rankingWines: FetchRankingWinesReducer
})

export default rootReducer
