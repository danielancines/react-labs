const mongoose = require('mongoose')
mongoose.Promise = global.Promise //retira mensagem de advertencia indicando que o mongoose.Promise está deprecado
module.exports = mongoose.connect('mongodb://localhost/todo')


