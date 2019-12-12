import {ajax} from 'rxjs/ajax';
import {of} from 'rxjs';
import {switchMap, debounceTime, map, catchError} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {FETCH_PLACES} from './actionTypes';
import {fetchPlacesSuccess, fetchPlacesFailure} from './actions';
import {API_URL, API_PARAMS, GOOGLE_PLACES_API_KEY} from '../../utils/config';

export const mapScreenEpic = action$ =>
  action$.pipe(
    ofType(FETCH_PLACES),
    debounceTime(500),
    switchMap(({queryText}) =>
      ajax
        .getJSON(
          `${API_URL}${queryText}&${API_PARAMS.key}${GOOGLE_PLACES_API_KEY}`,
        )
        .pipe(map(data => fetchPlacesSuccess(data))),
    ),
    catchError(error => of(fetchPlacesFailure(error.message))),
  );
