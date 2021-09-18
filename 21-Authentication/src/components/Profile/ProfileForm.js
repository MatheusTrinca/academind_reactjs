import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';
const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_API_KEY}
`;

const ProfileForm = () => {
  const authContext = useContext(AuthContext);
  const newPasswordRef = useRef();

  const submitHandler = async e => {
    e.preventDefault();
    const newPassword = newPasswordRef.current.value;
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        idToken: authContext.token,
        password: newPassword,
        returnSecureToken: false,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // assumindo que sempre seja response.ok = true
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          ref={newPasswordRef}
          type="password"
          minLength="5"
          id="new-password"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
