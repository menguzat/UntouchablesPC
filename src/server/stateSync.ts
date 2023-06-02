import { Room } from './room';

export class StateSync {
  private room: Room;

  constructor(room: Room) {
    this.room = room;
  }

  sendState() {
    this.room.broadcast(this.room.state.players);
  }
}