import React from 'react';

const StudentForm = ({ handleSetStudent, error, student, addStudent,addSpinner,LoadingAnimation }) => {
    

    return (
        <form className='registration'>
            <header>Registration Form</header>
            <div className='input-container'>
                <input type="text" placeholder='Name' onChange={(e) => handleSetStudent({ name: e.target.value })} value={student.name} />
                {!error.name && <p>Required</p>}
            </div>
            <div className='input-container'>
                <input type="text" placeholder='surname' onChange={(e) => handleSetStudent({ surname: e.target.value })} value={student.surname} />
                {!error.surname && <p>Required</p>}
            </div>
            <div className='input-container'>
                <input type="text" placeholder='Instructor' onChange={(e) => handleSetStudent({ instructor: e.target.value })} value={student.instructor} />
                {!error.instructor && <p>Required</p>}
            </div>
            <div className='input-container'>
                <input type="text" placeholder='Lesson' onChange={(e) => handleSetStudent({ lesson: e.target.value })} value={student.lesson} />
                {!error.lesson && <p>Required</p>}
            </div>
            <div className='input-container'>
                <input className='score' type="number" placeholder='Score' onChange={(e) => handleSetStudent({ score: Number(e.target.value) })} value={student.score} />
            </div>
            <button disabled={addSpinner} onClick={addStudent}> {addSpinner ? LoadingAnimation() :`Add to List`} </button>
        </form >
    )
}

export default StudentForm;

//setTimeout(() => setButtonDiasble(true), 1000)