import { Routes, Route } from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";
import Account from "./Account";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import ProtectedRoutes from "./ProtectedRoutes";
import LoggedinComponent from "./LoggedinComponent";
import "./App.css";

function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>ABC Züccaciye</h1>

          <section id="navigation">
            <a href="/">Home</a>
            <a href="/free">Free Component</a>
            <a href="/auth">Secret Component</a>
          </section>
        </Col>
      </Row>

      {/* create routes here */}
      <Routes>
        <Route exact path="/" element={<Account/>} />
        <Route exact path="/free" element={<FreeComponent/>} />
        {/* <ProtectedRoutes path="/auth" component={AuthComponent} /> */}
        <Route
          path="/auth"
          element={
            <ProtectedRoutes>
              <AuthComponent />
            </ProtectedRoutes>
          }
        />
        <Route exact path="/loggedin" element={<LoggedinComponent/>} />
        
      </Routes>

      

    </Container>
  );
}

export default App;