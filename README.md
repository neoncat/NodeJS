API com NODE JS

Nodejs download: https://nodejs.org/en/

Obs:

NODE -> interpretador de javascript

NPM "npm package manager" -> gerenciador de pacotes do node 

********************************************************************************************************************

Sistema Operacional: Windows 64

Editor de texto: Visual Code

********************************************************************************************************************

Vizualizando versão do NODE e do NPM

terminal:

node --version 

v9.3.0

npm --version

5.5.1

********************************************************************************************************************

Crie um diretório chamado Node e acesse o diretório

terminal:

mkdir Node

cd Node

********************************************************************************************************************

Iniciando uma aplicação do node

Terminal:

npm init -y

********************************************************************************************************************

Crie um arquivo server.js

código:

'use strict' 

console.log("Olá Mundo!");

Executando o script pelo terminal:

node server.js

********************************************************************************************************************

INSTALANDO PACOTES

Criando um servidor HTTP

Instalando pacotes

Terminal:

npm install http express debug --save


*os pacotes que serão instalados são separados por espaço*

*a pasta node_modules será criada dentro do diretório do projeto. Esta pasta nunca será enviada para o servidor.*

*os pacotes baixados serão adicionados as dependencias do arquivo package.json*

*express é o pacote que cuida da parte de models, views, controller*

********************************************************************************************************************

INSTALANDO PACOTES DAS DEPENDECIES

Se a pasta node_modules for removida execute o comando

Terminal:

npm install

*todos os pacotes das "dependencies" no arquivo package.jason serão instalados novamente*

********************************************************************************************************************

O script server.js da pasta bin são os scripts referentes ao servidor

O script app.js da pasta src são os scripts referentes a aplicação

********************************************************************************************************************

NPM START

Para configurar a execução da aplicação sem precisar informar o caminho do scprit

No arquivo package.jason de dentro "scripts" a seguinte linha : 

    "test": "echo \"Error: no test specified\" && exit 1"

Adicione a seguinte linha no lugar da linha removida:

    "start": "node ./bin/server.js"

Agora é só executar no terminal :

npm start

********************************************************************************************************************

NODEMON

Configurar para que o servidor seja resetado em tempo de execução

Terminal:

npm install nodemon --save-dev

Observação:

-dev significa que ele só ficará ativo em tempo de desenvolvimento e não será enviado para o servidor

Caso não funcione utilize outro comando:

npm install -g nodemon

Para executar a aplicação com o nodemon

nodemon .\bin\server.js

********************************************************************************************************************
