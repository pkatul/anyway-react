import { SagaIterator } from 'redux-saga'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import keys from '../actions/ActionTypeKeys'

/**
 * Saga for fetching wine and send the specified action
 * based on the result
 */
function* fetchWines(action: { type: string, url: string, success: string }): SagaIterator {
    try {
        const response = yield call(fetch, action.url)
        const data = yield call([ response, response.json ])
        const wines = data.wines ? data.wines : data;
        yield put({ type: action.success, wines })
    } catch (error) {
        yield put({ type: keys.FETCH_FAILURE, error })
    }
}

/**
 * Saga for calling fetchWines() whenever 'FETCH_START'
 * action is dispatched
 */
function* watchFetchWines(): SagaIterator {
    yield takeEvery(keys.FETCH_START, fetchWines)
}

/**
 * Root saga, which contains all the child sagas
 */
export default function* rootSaga() {
    yield all([
        watchFetchWines()
    ])
}
