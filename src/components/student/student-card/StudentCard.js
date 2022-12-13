import React, { useState } from 'react'

const StudentCard = ({ deleteStudent, student, LoadingAnimation, handleEditStudent, editingStudent, fixEdit, setFixEdit }) => {
    const { name, surname, id, instructor, lesson, score } = student
    const [isDeleteSpinner, setIsDeleteSpinner] = useState(false)
    const [edit, setEdit] = useState(false)

    return (
        <div className='student-card'>
            {isDeleteSpinner ? null : <svg title={edit ? "Remove" : "Edit"} onClick={() => {
                fixEdit ? setFixEdit(false) : setFixEdit(true)
                if (edit) {
                    setIsDeleteSpinner(true)
                    editingStudent(id)
                    setTimeout(() => setIsDeleteSpinner(false), 1000)
                    setTimeout(() => setEdit(false), 1300)
                } else {
                    setEdit(true)
                    handleEditStudent({ name: name, surname: surname, instructor: instructor, lesson: lesson, score: score })
                }
            }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
            </svg>}
            {isDeleteSpinner ? <h2 className='card-spinner'>{LoadingAnimation()}</h2> : <span title={edit ? "Remove" : "Delete"} onClick={(e) => {
                if (edit) {
                    setEdit(false)
                    setFixEdit(true)
                } else {
                    setIsDeleteSpinner(true)
                    setFixEdit(true)
                    deleteStudent(id)
                }
            }}>{edit ? "O" : "X"}</span>}
            <div className='card-content'>
                {edit ?
                    (fixEdit === false ? <>
                        <input type="text" placeholder={name} onChange={(e) => handleEditStudent({ name: e.target.value })} />
                        <input type="text" placeholder={surname} onChange={(e) => handleEditStudent({ surname: e.target.value })} />
                        <input type="text" placeholder={instructor} onChange={(e) => handleEditStudent({ instructor: e.target.value })} />
                        <input type="text" placeholder={lesson} onChange={(e) => handleEditStudent({ lesson: e.target.value })} />
                        <input type="number" placeholder={score} onChange={(e) => handleEditStudent({ score: e.target.value })} />
                    </> : setEdit(false))
                    : <>
                        <h3>{name + " " + surname}</h3>
                        <div className='instructor'>{instructor}</div>
                        <div>{lesson}</div>
                        <div className='card-score'>{score}</div>
                    </>
                }

            </div>
        </div>
    )
}

export default StudentCard