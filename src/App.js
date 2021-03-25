import './App.css';
import CoursesPage from './pages/CoursesPage';
import { Router } from '@reach/router';

function App() {
  return (
    <Router>
      <CoursesPage path="/courses" />
    </Router>
  );
}

export default App;
