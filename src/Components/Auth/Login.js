import React from 'react'
import { useAuth } from '../Contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

export default function Login() {
    const {authenticate, currentUser, logout} = useAuth();
    const navigate = useNavigate();

    async function handleAuth(){

        await authenticate();
        return navigate('/ToDo');
    }

  return (
    <div className='login'>
        <article className='bg-info mb-5 p-5 text-dark'>
            <h1 className='text-center'>To Do List</h1>
        </article>
        <Container>
        <Card className='m-2 border-dark text-center'>
            <Card.Header className='bg-dark text-white'>
                <h2>Login for full functionality</h2>
            </Card.Header>
            <Card.Body>
                {/* Step 3. call the function as part of a button */}
                <button onClick={() => handleAuth()} className='btn btn-dark'>Login w/ Github</button>
            </Card.Body>
        </Card>
    </Container>
    </div>
  );
}
