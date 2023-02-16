import {WebSocketServer} from 'ws';

const wss = new WebSocketServer({port:5501});
wss.on('connection', client => {
  client.on('message', (message,isBinary) => {
    [...wss.clients]
      .filter(c => c !== client)
      .forEach(c => c.send(isBinary ? message.toString() : message));
  });
});