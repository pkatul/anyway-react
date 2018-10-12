/**
 * Creates filtering action
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as Redux from 'redux';
import keys from './ActionTypeKeys';
import {
    ICategoryFilterAction,
    IVintageFilterAction,
    WineCategory
} from './FilterActions';

/**
 * Create an action for filtering wines with the specified category
 *
 * @param WineCategory Category of wine
 */
export const createCategoryFilterAction: Redux.ActionCreator<ICategoryFilterAction> =
    (category: WineCategory) => {
        return {
            category,
            type: keys.CATEGORY_FILTER
        };
    };

/**
 * Create an action for filtering wines with the specifiedvintage
 */
export const createVintageFilterAction: Redux.ActionCreator<IVintageFilterAction> =
    (vintage: number) => {
        return {
            type: keys.VINTAGE_FILTER,
            vintage
        };
    };
