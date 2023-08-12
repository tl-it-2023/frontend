import { apiUrl } from './config.js'; 

document.addEventListener('DOMContentLoaded', () => {
    const addResume = (resume) => {
        const needs = ["fio", "date_of_birth", "education", "experience", "phone", "email"]
        for (const need of needs) {
            const column = document.querySelector(`.${need}`);
            const divElement = document.createElement("div");
            divElement.textContent = `${resume[`${need}`]}`; 
            column.appendChild(divElement);
        }
    };

    const getResumes = async () => {
        try {
            const url = apiUrl + "/resume/get_all_sorted_resumes";
            const response = await fetch(url, {
                method: 'GET',
            });
            
            if (response.ok) {
                const data = await response.json();
                console.log('Ответ от сервера:', data);
                for (let resume of data) {
                    addResume(resume);
                }
            } else {
                console.error('Ошибка отправки файла на сервер');
            }
        } catch (error) {
            console.error('Произошла ошибка:', error);
        }
    }
    const resumes = getResumes().then(function(value){ return value });
    console.log(resumes);
});