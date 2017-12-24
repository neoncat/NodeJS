'use strict'  /* força o interpretador a ser mais rigoroso com a escrita do código */

/* declarando constantes e importando os pacotes da pasta node_modules */
const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

/* 
    Para importar arquivos que não são da pasta node_modules é
    necessário informar o caminho do arquivo começando no minimo
    com ./arquivo
    Exemplo: 
        
        const teste = require('./teste');
*/

const app = express();
const port = normalizarPorta(process.env.PORT || '3000');
app.set('port', port);

/* criando uma constante para o servidor baseado na app criada acima */
const server = http.createServer(app);
/* rota criada para que o usuario consiga acessar a aplicação pela URL */
const router = express.Router();

/* Configurando a primeira rota */
const rota = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node API", /* coloque um titulo a sua escolha */
        version: "0.0.1" /* coloque a versão a sua escolha */
    });
}); /* Quando o usuario acessar a porta 3000 ele ira cair nesta rota */

app.use('/', rota);

/* configurar o servidor para ouvir a porta que foi setada */
server.listen(port);
/* Sempre que ocorrer algum erro a função serverError será chamada */
server.on('error', serverError);
server.on('listening', onListening);

console.log('API rodando na porta ' + port);

/*
    Função para normalizar a porta caso
    a porta 3000 esteja ocupada...
*/

function normalizarPorta(valor){
    
    const porta = parseInt(valor, 10);

    if (isNaN(porta)){
        return valor;
    }

    if (porta >= 0){
        return porta;
    }

    return false;
}

function serverError(error) {

    if (error.sycall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code) {
        
        case 'EACCES': /* Erro de permissão */
            console.error(bind + ' requer privilégios elevados...');
            process.exit(1);
            break;
        
        case 'EADDRINUSE': /* Erro de endereço em uso */
            console.error(bind + ' já está em uso...');
            process.exit(1);
            break;
        
        default:
            throw error;
    
    }//fim do switch
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port' + addr.port; 
    debug('Escutando ' + bind);
}