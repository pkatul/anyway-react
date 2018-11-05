/**
 * Define states mutated by Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */

/**
 * String literal types for filter
 */
export type FilterType =
    'none'     |
    'category' |
    'price'    |
    'vintage'

/**
 * Interface for wine
 */
export interface IWine {
    barcode_number: string
    capacity: number
    combined_name: string
    combined_name_jpn: string
    country: string
    producer: string
    producer_jpn: string
    region_jpn: string
    type: string
    vintage: string
}

/**
 * Interface for Country
 */
export interface ICountry {
    name: string
}

/**
 * Interface for importer
 */
export interface IImporter {
    dir: string
    filename: string
    name: string
    url: string
}

/**
 * Interface for array of wines
 */
export interface IWines {
    wines: IWine[]
}

/**
 * Interface for the country state
 */
export interface ICountryState {
    countries: ICountry[]
}

/**
 * Interface for filtered wines
 */
export interface IFilteredWines extends IWines {
    filter: FilterType
}

/**
 * Interface for importers
 */
export interface IImporters {
    importers: IImporter[]
}

/**
 * Declare data type of the parent state
 */
export interface IState {
    countries: ICountryState
    filteredWines: IFilteredWines
    importers: IImporters
    newWines: IWines
    rankingWines: IWines
}

/**
 * Initial value for the country state
 */
export const initCountryState: ICountryState = {
    countries: []
}

/**
 * Initial value for wines
 */
export const initWines: IWines = {
    wines: []
}

/**
 * Initial value for filtered wines
 */
export const initFilteredWines: IFilteredWines = {
    filter: 'none',
    wines: []
}

/**
 * Initial value for importers
 */
export const initImporters: IImporters = {
    importers: []
}
