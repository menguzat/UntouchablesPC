import * as http from 'http';
import * as colyseus from 'colyseus';
import { Room } from './room';

export class GameServer {
  private server: http.Server;
  private gameServer: colyseus.Server;

  constructor() {
    this.initialize();
  }

  initialize() {
    this.server = http.createServer();
    this.gameServer = new colyseus.Server({
      server: this.server,
    });

    this.gameServer.define('untouchables_test_net', Room);
    this.gameServer.listen(3000);
  }
}