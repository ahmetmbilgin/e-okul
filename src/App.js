import './App.scss';
import { useEffect, useState } from 'react';
import StudentList from './components/student/student-list/StudentList';
import StudentForm from './components/student/student-form/StudentForm';
import { Spinner } from 'react-bootstrap';
import API from './API';


function App() {

  const [student, setStudent] = useState({ name: "", surname: "", instructor: "", lesson: "", score: "" })
  const [error, setError] = useState({ name: true, surname: true, instructor: true, lesson: true, score: true })
  const [studentList, setStudentList] = useState([])
  const [spinner, setSpinner] = useState(true)
  const [addSpinner, setAddSpinner] = useState(false)
  const [editStudent, setEditStudent] = useState({ name: "", surname: "", instructor: "", lesson: "", score: "" })
  const [fixEdit, setFixEdit] = useState(true)


  //Spinner
  function LoadingAnimation() {
    return <Spinner animation="border" />
  }

  //Add Student
  const addStudent = async (e) => {
    try {
      e.preventDefault();
      setError(student);
      if (student.name && student.surname && student.instructor && student.lesson) {
        if (!student.score) {
          student.score = 0
        }
        setAddSpinner(true)
        const response = await API.olustur(student)
        console.log(response)
        if (response.status === 201) {
          setStudentList(previousArray => [...previousArray, response.data])
        }
        setStudent({ name: "", surname: "", instructor: "", lesson: "", score: "" })
        setAddSpinner(false)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const getList = async () => {
      const list = await API.listele()
      setStudentList(list.data)
      setSpinner(false)
    }
    getList();
  }, [])

  const deleteStudent = async (id) => {
    try {
      const deleteResponse = API.sil(id)
      if (deleteResponse.status === 200) {
        const response = API.listele()
        setStudentList(response.data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const editingStudent = async (id) => {
    try {
      const editResponse = API.guncelle(id,editStudent)
      if (editResponse.status === 200) {
        const response = API.listele()
        setStudentList(response.data)
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleEditStudent = value => {
    setEditStudent(prevStudent => ({ ...prevStudent, ...value }))
  }

  const handleSetStudent = value => {
    setStudent(prevStudent => ({ ...prevStudent, ...value }))
  }

  return (
    <div className="App">

      <div className='form-framework'>
        <StudentForm LoadingAnimation={LoadingAnimation} addSpinner={addSpinner} handleSetStudent={handleSetStudent} error={error} student={student} addStudent={addStudent} />
        {spinner ? <h2>{LoadingAnimation()} Loading... </h2> : null}
        <div className='list'>
          {studentList.length ? <StudentList setFixEdit={setFixEdit} fixEdit={fixEdit} editingStudent={editingStudent} handleEditStudent={handleEditStudent} studentList={studentList} LoadingAnimation={LoadingAnimation} deleteStudent={deleteStudent} /> : null}
        </div>
      </div>

    </div>
  );
}

export default App;