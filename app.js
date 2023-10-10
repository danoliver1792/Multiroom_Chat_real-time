// enterpoint da nossa aplicacao, a partir dele vamos subir o servidor para executar requisicoes para o aplicativo

// importando as configuracoes do servidor e parametrizando a porta de escuta
var app = require('./config/server')

app.listen(80, function(){
    console.log('Servidor Online');
})
