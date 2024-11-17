import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getStudents = () => axios.get(`${API_URL}/students`);
export const getCourses = () => axios.get(`${API_URL}/courses`);

