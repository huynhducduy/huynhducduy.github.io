import * as LocalStorage from 'utils/local-storage';
import constants from './constants';

/**
 * @return int
 */
export default function () {
  const access_token_expire_at = parseInt(
    LocalStorage.getItem(constants.LOCAL_STORAGE_KEY.ACCESS_TOKEN_EXPIRES_AT, 0)
  );

  return Number.isInteger(access_token_expire_at) && access_token_expire_at >= 0
    ? access_token_expire_at
    : 0;
}
