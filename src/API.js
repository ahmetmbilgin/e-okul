import axios from 'axios';
import qs from 'qs';
const url = "http://localhost:3001/"

const API = {
    olustur:  async (name ,surname, lesson, instructor) =>  axios.post(`${url}students`, qs.stringify({name ,surname, lesson, instructor})),

    sil:  async (studentID) =>  axios.delete(`${url}students/${studentID}`),

    guncelle:  async (studentID, editStudent) =>  axios.put(`${url}students/${studentID}`, qs.stringify(editStudent)),

    listele: async  () =>  axios.get(`${url}students`)
}

export default API;