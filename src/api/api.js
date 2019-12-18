import URLS from '../../config/urls'
import { get, post } from './ajax'
let base = URLS.API_URL

// 用户相关
export const postLogin = p => post(`${base}/login/`, p);
export const getLogin = p => get(`${base}/login/`, p);
export const testRequest = p => get(`${base}/test/`, p);
// http://127.0.0.1:8000/test/
