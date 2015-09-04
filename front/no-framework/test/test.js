var expect = chai.expect;
var should = chai.should();

var datos ={
	nombre:'joel',
	apellido:'silva',
	provincia: '1',
	intendencia: '2',
	password: '123456'
}

describe('Datos Fecha Formato', function() {

	it('Tue Sep 01 2015 21:37:32 GMT-0300 (ART) debería ser igual a 01/09/2015', function() {
		var d = new Date("Tue Sep 01 2015 21:37:32 GMT-0300 (ART)");
		expect(d.formatearFecha("#DD#/#MM#/#YYYY#")).to.equal("01/09/2015");
	});

});

describe('Auth - Ajax', function() {
	var auth = new Auth();
	it('Envio datos recibo 200', function() {
		auth.signup(datos).entonces(function(d){
			expect(JSON.parse(d).code).to.equal('200');
		});

	});
	
	it('Hago Login recibo 200', function() {
		//auth.login(datos).entonces(function(d){
		//	expect('203').to.equal('200');
		//});
	});

	it('Hago Logout recibo 200', function() {
		//auth.logout(datos).entonces(function(d){
		//	expect(JSON.parse(d).code).to.equal('200');
		//});
	});


});
