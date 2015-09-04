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

	it('Envio datos recibo 200', function() {
		var auth = new Auth();
		auth.signup(datos).entonces(function(d){
			expect(JSON.parse(d).code).to.equal('200');
		});

	});
	
	it('Hago Login recibo 200', function() {

	});

	it('Hago Logout recibo 200', function() {

	});


});
