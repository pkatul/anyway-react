/**
 * Define states mutated by Redux
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */

import { IBanner } from 'states/IBanner'

/**
 * Interface for feature banner state
 */
export interface IBannerState {
    featureBanners: IBanner[]
    otherDrinkBanners: IBanner[]
    saleBanners: IBanner[]
}

/**
 * Initial value for banner
 */
export const initBanners: IBannerState = {
    featureBanners: [],
    otherDrinkBanners: [],
    saleBanners: []
}
