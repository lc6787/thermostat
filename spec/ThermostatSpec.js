describe('thermostat', function() {
	let thermostat;

	beforeEach(function() {
    thermostat = new Thermostat();
  });

	it('shows the thermostat is initally 20 degrees', function() {
		expect(thermostat.temperature).toEqual(20);
	});

});
