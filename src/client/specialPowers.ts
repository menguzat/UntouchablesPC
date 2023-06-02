export class SpecialPower {
    type: string;
    cooldown: number;
    private lastActivated: number;
  
    constructor(type: string, cooldown: number) {
      this.type = type;
      this.cooldown = cooldown;
      this.lastActivated = 0;
    }
  
    activate() {
      // Check if