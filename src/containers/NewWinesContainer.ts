/**
 * Container for fetching all wines
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { ActionTypes, createFetchAction, IFetchAction } from 'actions'
import { NewWineList } from 'components/contents/NewWineList'
import { connect } from 'react-redux'
import * as Redux from 'redux'
import { IRootState } from 'states'

/**
 * Map Redux state to component.props
 */
const mapStateToProps = (state: IRootState) => {
    return state.newWines
}

/**
 * Map dispatch to component.props
 */
const mapDispatchToProps = (
    dispatch: Redux.Dispatch<IFetchAction>,
    props: any
) => ({
    onMount: () =>
        dispatch(
            createFetchAction(ActionTypes.FETCH_NEW_WINES_SUCCESS, props.url)
        )
})

/**
 * Connect Redux state to the component
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewWineList)
