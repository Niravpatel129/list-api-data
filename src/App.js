import './App.scss';
import StudentList from './components/StudentList/StudentList';
import StudentsProvider from './context/Students/StudentsProvider';

function App() {
  return (
    <StudentsProvider>
      <div className="App">
        <StudentList />
      </div>
    </StudentsProvider>
  );
}

export default App;
