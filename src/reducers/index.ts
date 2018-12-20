/**
 * Define a root reducer for Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import { IRootState } from '../states'
import FetchBannersReducer from './FetchBannersReducer'
import FetchCountriesReducer from './FetchCountriesReducer'
import FetchImportersReducer from './FetchImportersReducer'
import FetchNewsReducer from './FetchNewsReducer'
import FetchNewWinesReducer from './FetchNewWinesReducer'
import FetchPhotosReducer from './FetchPhotosReducer'
import FetchRankingWinesReducer from './FetchRankingWinesReducer'
import FetchWinesetsReducer from './FetchWinesetsReducer'
import FilterWinesReducer from './FilterWinesReducer'

/**
 * Root reducer
 */
const rootReducer = combineReducers<IRootState>({
    banners: FetchBannersReducer,
    countries: FetchCountriesReducer,
    filteredWines: FilterWinesReducer,
    form: FormReducer,
    importers: FetchImportersReducer,
    newWines: FetchNewWinesReducer,
    news: FetchNewsReducer,
    photos: FetchPhotosReducer,
    rankingWines: FetchRankingWinesReducer,
    winesets: FetchWinesetsReducer
})

export default rootReducer
