describe('Thermostat' function()){
  var thermostat;
  beforeEach(function(){
    thermostat = new thermostat();
  });

  describe('start function', function(){
    it('return 20 degree', function(){
      expect(thermostat.start).toEqual(20);
    });
  });
};