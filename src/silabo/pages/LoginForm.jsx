import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import '../styles/LoginForm.css';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); // Limpiar errores anteriores

    if (!username || !password) {
      setError('Por favor, ingresa tu usuario y contraseña.');
      return;
    }

    setIsLoading(true);

    // Simulación de autenticación
    setTimeout(() => {
      setIsLoading(false);
      setError(''); // Borrar el mensaje de error si todo sale bien
      console.log('Login successful', { username, password });
    }, 2000);
  };

  const handleGithubLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/github';
  };

  return (
    <Container className="d-flex justify-content-center align-items-center login-container">
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <div className="login-card p-4 shadow-sm rounded">
            <h3 className="text-center mb-4">Iniciar Sesión</h3>
            {error && <div className="alert alert-danger text-center">{error}</div>}
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="username" className="mb-3">
                <Form.Label className="form-label">Nombre de Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="password" className="mb-4">
                <Form.Label className="form-label">Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mb-3 login-button" disabled={isLoading}>
                {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
              </Button>
              <div className="text-center text-muted mb-2">o</div>
              <Button variant="dark" onClick={handleGithubLogin} className="w-100 github-button">
                <i className="bi bi-github"></i> Iniciar sesión con GitHub
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
