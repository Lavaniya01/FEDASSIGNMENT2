const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('https://api.example.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.token;

      // Store the token in local storage
      localStorage.setItem('token', token);

      // Redirect to the home page
      window.location.href = 'index.html';
    } else {
      console.error('Login failed');
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
const users = [
  { id: 1, username: 'user', password: '$2a$10$Q0p5/wCjU6z0rYZKV.zZHe7zBgTbRZzrKxKhqbU6cXeoNUDhRnGyC' }, // password is "password"
];

app.use(express.json());

app.post('/auth/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const token = jwt.sign({ id: user.id }, 'secret-key', { expiresIn: '1h' });

  res.json({ token });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
