import * as types from './actionTypes';
import HomePageApi from '../api/HomePageApi';

export function loadHomePageSuccess(data) {
	return {type: types.LOAD_HOMEPAGE_DATA_SUCCESS, data};
}

export function loadHomePageFail(data) {
	return {type: types.LOAD_HOMEPAGE_DATA_FAIL, data};
}

export function loadHomePageData(zip) {
	return function(dispatch) {
		return HomePageApi.getAllHomePageData(zip).then(data => {
			dispatch(loadHomePageSuccess(data));
		}).catch(error => {
			throw(error);
		});
	};
}