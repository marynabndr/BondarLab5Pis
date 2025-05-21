const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  const login = query.login;

  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

  if (login) {
    res.end(`<h1>Ваш логін у Moodle: ${login}</h1>
             <p>Прізвище: Бондар</p>
             <p>Ім’я: Марина</p>
             <p>Курс: 2</p>
             <p>Група: ІС-32</p>`);
  } else {
    res.end(`<p>Додайте параметр ?login=ВашЛогін у URL</p>`);
  }
});

server.listen(3000, () => {
  console.log('Сервер працює на http://localhost:3000');
});
