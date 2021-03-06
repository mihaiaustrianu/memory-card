import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
function NavbarComponent(props) {
  return (
    <Navbar bg="dark" variant="dark" className="g-4">
      <Container>
        <Navbar.Brand>Memory Game</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <p>Score : {props.score}</p>
            <p>HighScore : {props.highScore}</p>
          </Navbar.Text>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComponent;
