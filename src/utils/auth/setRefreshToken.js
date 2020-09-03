import { isEmpty } from 'ramda';
import constants from './constants';

import setItem from 'utils/local-storage/setItem';
import removeItem from 'utils/local-storage/removeItem';

export default function (token = '') {
  if (isEmpty(token)) removeItem(constants.LOCAL_STORAGE_KEY.REFRESH_TOKEN);
  else setItem(constants.LOCAL_STORAGE_KEY.REFRESH_TOKEN, token);
}
