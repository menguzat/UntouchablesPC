export class UI {
    private specialPowerCooldownBars: HTMLElement[];
  
    constructor() {
      this.initialize();
    }
  
    initialize() {
      // Set up the UI elements, such as special power cooldown bars
      this.specialPowerCooldownBars = Array.from(
        document.querySelectorAll<HTMLElement>('.special-power-cooldown')
      );
    }
  
    update(player: Player) {
      // Update the UI to reflect the current game state, such as special power cooldowns
      player.specialPowers.forEach((power, index) => {
        const cooldownBar = this.specialPowerCooldownBars[index];
        const cooldownPercent = power.getCooldownPercent();
  
        cooldownBar.style.width = `${cooldownPercent}%`;
      });
    }
  }