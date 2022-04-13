'use strict';

describe('Thermostat', function() {
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('initially', function() {
    it('has temperature set to 20 degrees', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

		it('has power save mode on', function() {
			expect(thermostat.showPowerSavingMode()).toBe('ON');
		});
  });

	describe('temperature features', function() {
    it('can increase the temperature', function() {
				thermostat.up();
        expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('can decrease the temperature', function() {
			for (let i = 0; i < 6; i++) {
				thermostat.down();
			}
        expect(thermostat.getCurrentTemperature()).toEqual(14);
    });

    it('minimum temperature is 10 degrees', function() {
        expect(thermostat.MINIMUM).toEqual(10);
    });

		it('reset the temperature to 20', function() {
			thermostat.temperature = 25;
			thermostat.resetThermostat();
			expect(thermostat.getCurrentTemperature()).toEqual(20);
		});

    it('under 10 degrees, it stays at 10 degrees', function() {
			for (let i = 0; i < 15; i++) {
				thermostat.down();
			}
        expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
	});

	describe('power saving mode', function() {
    it('if PSM is on, max temperature is 25 ', function() {
			for (let i = 0; i < 10; i++) {
				thermostat.up();
			}
        expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    it('if PSM is off, max temperature is 32 ', function() {
        thermostat.switchPowerSave();
				for (let i = 0; i < 12; i++) {
					thermostat.up();
				}
        expect(thermostat.getCurrentTemperature()).toEqual(32);
    });

    it('if PSM is on, it can be turned off', function() {
        thermostat.switchPowerSave();
        expect(thermostat.showPowerSavingMode()).toBe('OFF');
    });
	});

	describe('Energy Usage', function() {
    it('shows low energy usage when temp. set under 18 degrees', function() {
      thermostat.temperature = 17;
			thermostat.showEnergyUsage();
      expect(thermostat.showEnergyUsage()).toEqual('low-usage');
  	});
	
    it('shows medium energy usage when temp. is between 18-25 degrees', function() {
			thermostat.temperature = 22;
      expect(thermostat.showEnergyUsage()).toEqual('medium-usage');
    });

    it('shows high energy usage when temp. over 25 degrees', function() {
			thermostat.switchPowerSave();
			for (let i = 0; i < 12; i++) {
				thermostat.up();
			}
        expect(thermostat.showEnergyUsage()).toEqual('high-usage');
    });
});


});
