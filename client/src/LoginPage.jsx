import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput, Button, Pane, Heading, toaster } from 'evergreen-ui';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded credentials
    const hardcodedUsername = 'admin';
    const hardcodedPassword = 'password123';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      navigate('/user'); // Redirect to home or user grid after login
    } else {
      toaster.danger('Login failed. Please check your credentials.');
    }
  };

  return (
    <Pane display="flex" alignItems="center" justifyContent="center" height="100vh">
      <Pane width={300} padding={16} borderRadius={5} elevation={2}>
        <Heading size={700} marginBottom={20}>Login</Heading>
        <form onSubmit={handleLogin}>
          <TextInput
            name="username"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            width="100%"
            marginBottom={10}
          />
          <TextInput
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            width="100%"
            marginBottom={20}
          />
          <Button appearance="primary" type="submit" width="100%">Login</Button>
        </form>
      </Pane>
    </Pane>
  );
};

export default LoginPage;