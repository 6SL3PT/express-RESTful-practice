const express = require('express');
const logger = require('./middleware/logger');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/hello', require('./routes/ops/hello_ops'));
app.use('/helloJson', require('./routes/ops/helloJson_ops'));
app.use('/concat', require('./routes/ops/concat_ops'));
app.use('/course', require('./routes/ops/course_ops'));
app.use('/lecturer', require('./routes/ops/lecturer_ops'));

app.use(logger);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server was started at PORT:${PORT}`));