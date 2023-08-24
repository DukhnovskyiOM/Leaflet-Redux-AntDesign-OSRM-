import { call, put, takeEvery } from 'redux-saga/effects';
import { addCoordinates, checkActive } from '../pointSlice';
import { getPolyline } from '../../api/getPolyline';

export function* workerSaga(action) {
    const {pointString} = action.payload
    const response = yield call(getPolyline, pointString);
    const coordinates = yield response.data.routes[0].geometry.coordinates.map((arr) => [arr[1], arr[0]]);
    yield put(addCoordinates(coordinates));
}

export function* watchClickSaga() {
    yield takeEvery(checkActive, workerSaga);
}

export default function* rootSaga() {
    yield watchClickSaga();
}