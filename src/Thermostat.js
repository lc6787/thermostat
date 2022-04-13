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

  up() {
    if(this.temperature === this.maximum) {
      return this.temperature;
    } else { return this.temperature += 1; }
  }

  down() {
    if (this.temperature === this.MINIMUM) {
      return this.temperature;
    } else { return this.temperature -= 1; }
  }

  switchPowerSave() {
    if (!this.powerSave) {
      this.powerSave = true;
      this.maximum = 25;
      if (this.temperature >= 25) { 
        this.temperature = 25;
      }
      return ('Power Saving Mode - ON');
    } else {
      this.powerSave = false;
      this.maximum = 32;
      return ('Power Saving Mode - OFF');
    }
  }

  resetThermostat() {
    this.temperature = 20
    this.powerSave = true
    return 'Thermostat reset';
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
    if (this.powerSave === true) {
      return 'ON';
    } else { return 'OFF'; }
  }

}

console.log("loaded");