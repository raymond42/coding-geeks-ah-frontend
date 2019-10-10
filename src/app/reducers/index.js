import { combineReducers } from 'redux';
import loginReducer from '../../feature/auth/login/LoginReducer';
import logoutReducer from '../../feature/auth/logout/LogoutReducer';
import SignUpReducer from '../../feature/auth/signup/SignUpReducer';
import ProfileReducer from '../../feature/profile/ProfileReducer';

export default combineReducers({
  login: loginReducer,
  logout: logoutReducer,
  signup: SignUpReducer,
  profile: ProfileReducer
});
