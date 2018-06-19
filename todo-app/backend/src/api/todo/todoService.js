const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({ new: true, runValidators: true }) //new retorna o registro atualizado, senão irá retornar o registro velho depois da atualização, runValidators aplica as validações, tipo se o campo for obrigatório

module.exports = Todo