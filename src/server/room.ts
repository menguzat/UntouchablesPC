import { Room as ColyseusRoom } from 'colyseus';
import { Schema, type } from '@colyseus/schema';
import { Player } from '../client/player';

class GameState extends Schema {
  @type([Player]) // Assuming Player extends Schema
  players: Player[];
}

export class Room extends ColyseusRoom<GameState> {
  constructor(options: any) {
    super(options);

    this.setState(new GameState());
  }

  onJoin(client: any, options: any) {
    const player = new Player(client.sessionId, options);
    this.state.players.push(player);
  }

  onLeave(client: any) {
    this.state.players = this.state.players.filter(
      (player) => player.id !== client.sessionId
    );
  }
}