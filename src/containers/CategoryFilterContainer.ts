/**
 * Container for filtering wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as Redux from 'redux';
import { createCategoryFilterAction } from '../actions/FilterActionCreator';
import { CategoryFilterLink, ICategoryFilterLink } from '../components/sidebar/CategoryFilterLink';
import { IState } from '../reducers';

/**
 * Map Redux state to component.props
 */
const mapStateToProps = (state: IState, props: RouteComponentProps<{}>) => {
    return state.filteredWines;
};

/**
 * Map dispatch to component.props
 */
const mapDispatchToProps = (dispatch: Redux.Dispatch<Redux.Action<any>>, props: any) => ({
    onFilterClick: () => dispatch(createCategoryFilterAction(props.category))
});

/**
 * Connect Redux state to the component
 */
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CategoryFilterLink));
