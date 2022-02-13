import { React, useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();


  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault(); //not refresh page
    setError('')
    try {
      await login(user.email, user.password);
      navigate('/');
    } catch (error) {
      // console.log({error})
      // if (error.code === "auth/weak-password") {
      //   setError('Invalid email');
      // }
      setError(error.message);
    }
  }

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' placeholder='yourname@company.com'
          onChange={handleChange}
        />

        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' placeholder='******'
          onChange={handleChange}
        />

        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
