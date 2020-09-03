import { isEmpty } from 'ramda';
import constants from './constants';

import setItem from 'utils/local-storage/setItem';
import removeItem from 'utils/local-storage/removeItem';

export default function (expires_at = '') {
  if (isEmpty(expires_at))
    removeItem(constants.LOCAL_STORAGE_KEY.ACCESS_TOKEN_EXPIRES_AT);
  else {
    setItem(constants.LOCAL_STORAGE_KEY.ACCESS_TOKEN_EXPIRES_AT, expires_at);
  }
}
