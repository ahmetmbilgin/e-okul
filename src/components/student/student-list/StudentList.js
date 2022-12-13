import React from 'react';
import StudentCard from '../student-card/StudentCard';

const StudentList = ({ studentList, deleteStudent, LoadingAnimation, handleEditStudent, editingStudent, fixEdit, setFixEdit }) => {
    return (
        <>
            <div className='student-list'>Student List</div>
            <div className='card-container'>
                {studentList.map((student, index) =>
                    <StudentCard setFixEdit={setFixEdit} fixEdit={fixEdit} editingStudent={editingStudent} handleEditStudent={handleEditStudent} LoadingAnimation={LoadingAnimation} key={student.id} student={student} deleteStudent={deleteStudent} />
                )}
            </div>
        </>
    )
}

export default StudentList;