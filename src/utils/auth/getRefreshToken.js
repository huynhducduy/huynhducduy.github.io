import * as LocalStorage from 'utils/local-storage';
import constants from './constants';

export default function () {
  return LocalStorage.getItem(constants.LOCAL_STORAGE_KEY.REFRESH_TOKEN);
}
