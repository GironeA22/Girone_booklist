import './App.css';
import { Form, Button, FormControl, Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form>
          <p>Title</p>
          <Form.Control placeholder='To Kill A Mockingbird' />
          <p>Author</p>
          <Form.Control placeholder='Harper Lee' />
          <p>Synopsis</p>
          <Form.Control as='textarea' placeholder='Boo, Scout, and Gregory play in a treehouse' rows={3} />
          <br />
          <Button type='Submit'>Submit</Button>
        </Form>
      </header>
      <Card>
        <Card.Body>
          <Card.Title><h1>To Kill A Mockingbird</h1></Card.Title>
          <Card.Text>Harper Lee</Card.Text>
          <Card.Text>Boo, Scout, and Gregory play in a treehouse</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
