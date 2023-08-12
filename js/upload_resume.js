import { apiUrl } from './config.js'; 

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('upload_form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log(form.files);
        const formData = new FormData(form);
        try {
            const url = apiUrl + "/resume/upload_resume_files";
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Ответ от сервера:', data);
                popup.classList.remove('hidden'); // Показать всплывающее уведомление
                setTimeout(() => {
                    popup.classList.add('hidden'); // Скрыть уведомление через некоторое время
                }, 3000);
            } else {
                console.error('Ошибка отправки файла на сервер');
            }
        } catch (error) {
            console.error('Произошла ошибка:', error);
        }
    });
    form.reset(); // Очистить форму
    return false;
});