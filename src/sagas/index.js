
import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {

  const json = yield fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-04-30&sortBy=publishedAt&apiKey=c1e3d113f01f4e2eb0cc208ebba15513')
    .then(response => response.json());

  yield put({ type: "NEWS_RECEIVED", json: json.articles || [{ error: json.message }] });
}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}

//https://newsapi.org/v2/everything?q=tesla&from=2021-04-30&sortBy=publishedAt&apiKey=c1e3d113f01f4e2eb0cc208ebba15513
