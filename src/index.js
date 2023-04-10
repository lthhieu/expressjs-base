
import express from 'express'
require('dotenv').config()
import cors from 'cors'
const app = express()

// xử lý dữ liệu gửi từ client lên server dưới định dạng JSON
app.use(express.json());
// xử lý dữ liệu gửi từ client lên server dưới định dạng x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080
app.use(cors())
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(PORT, () => console.log("This app is running on port:", PORT))