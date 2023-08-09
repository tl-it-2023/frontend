const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/users';
Http.open("GET", url);
Http.send();

