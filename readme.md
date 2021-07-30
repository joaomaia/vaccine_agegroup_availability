# Auto-agendamento da vacina contra COVID-19

Este programa monitoriza o site do ministério da saúde que permite o agendamento da vacinação por parte dos cidadãos. Sempre que a faixa etária é alargada um bot do Telegram envia uma mensagem a notificar.


## Como usar

1 - Criar um bot no Telegram seguindo as instruções disponíveis [aqui](https://core.telegram.org/bots).  
2 - Clonar o projecto com `git clone`.  
3 - Instalar dependências com `npm install`.   
4 - No ficheiro `index.js` colocar nos campos `BOT_API_KEY` e `CHAT_ID` a informação relativa ao bot criado.  
5 - Correr o programa com `node index.js`. Opcionalmente pode usar uma ferramenta como o [PM2](https://pm2.keymetrics.io/) para manter o programa em execução.


