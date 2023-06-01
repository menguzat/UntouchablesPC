import { Server, Room } from 'colyseus';
import { createServer } from 'http';

const gameServer = new Server({
  server: createServer(app),
});

class GameRoom extends Room {
  // Room state
  onCreate(options: any) {
    // Initialize room
  }

  onJoin(client: any, options: any) {
    // Player joined
  }

  onLeave(client: any, consented: boolean) {
    // Player left
  }

  onMessage(client: any, message: any) {
    // Player sent a message
  }

  onDispose() {
    // Room is disposed
  }
}

gameServer.define('untouchablestestnet', GameRoom).enableRealtimeListing();

gameServer.listen(PORT);
