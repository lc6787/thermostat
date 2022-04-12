'use strict';

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM = 10;
    this.maximum = 25;
    this.powerSave = true;
    this.energyUsage = 'medium-usage';
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  up(degrees) {
    if(this.temperature + degrees >= this.maximum) {
      return this.temperature = this.maximum;
    } else { return this.temperature += degrees; }
  }

  down(degrees) {
    if (this.temperature - degrees <= this.MINIMUM) {
      return this.temperature = this.MINIMUM;
    } else { return this.temperature -= degrees; }
  }

  switchPowerSave() {
    if (!this.powerSave) {
      this.powerSave = true;
      this.maximum = 25;
    } else {
      this.powerSave = false;
      this.maximum = 32;
    }
  }

  reset() {
    return this.temperature = 20;
  }

  showEnergyUsage() {
    if (this.temperature < 18) {
      this.energyUsage = 'low-usage';
    } else if (this.temperature > 25) {
      this.energyUsage = 'high-usage';
    } else { this.energyUsage = 'medium-usage'; }
    return this.energyUsage;
  }

  showPowerSavingMode() {
    return this.powerSave;
  }

}