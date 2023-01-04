const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(bodyParser.json())

app.get('/', (req, res) =>{

    console.log("cookies😀", req.cookies)
    console.log("cookies - test-cookie😀", req.cookies["test-cookie"])
    res.send("메인 페이지");
});

const posts = [
    {id:1, content: "첫번째 게시물", user_id: 1},
    {id:2, content: "두번째 게시물", user_id: 2},
    {id:3, content: "세번째 게시물", user_id: 2},
    {id:4, content: "네번째 게시물", user_id: 3},
    {id:5, content: "다섯번째 게시물", user_id: 1}
]

const users = [
    {id: 1, "name": "jiyoung", "phone":"01000000000", "level": "student"},
    {id: 2, "name": "seolin", "phone":"01000000001", "level": "student"}
]

posts.map(post => {
    const user = users.find(user => user.id === post.user_id);
    return {
        ...post,
        name: user ? user.name : null,
    }
})

app.post('/signup', (req, res) => {
    users.push(res.body)
    console.log(users)
    res.send("회원가입 페이지");
});

app.post('/login', (req, res) => {
    res.send("로그인 페이지");
});

app.post('/logout', (req, res) => {
    res.send("로그아웃 페이지");
});

app.listen(port, () => {
    console.log(port, '서버 열림');
});