//Step 5 - Routing - Create Routing Component
import React from 'react'
import './Routing.css'
//Import Bootstrap components for the UI
import { Container, Row } from 'react-bootstrap'
//Step 9 - Routing
import RouterInfo from './RouterInfo'
//Step 2 - Auth - import and render AuthInfo
import AuthInfo from './AuthInfo'


export default function Routing() {

    return (
        <section className="routing">
            <article className="text-center m-0 p-5 bg-info">
                <h1>Routing and Authentication</h1>
                <a href="https://reactrouter.com/web/guides/quick-start" target="_blank" rel="noreferrer" className="btn btn-outline-dark m-1">Routing Docs</a>
                <a href="https://firebase.google.com/docs/auth/web/github-auth?authuser=0" target="_blank" rel="noreferrer" className="btn btn-light m-1">Authentication</a>
            </article>
            {/* At this point, import into App.js */}
            {/* Step 7 - Routing - Create Container and Row with RouterInfo nested inside */}
            <Container>
                <Row>
                    <RouterInfo />
                    <AuthInfo />
                </Row>
            </Container>
            
        </section>
    )
}
