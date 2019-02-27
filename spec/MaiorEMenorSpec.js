describe("MaiorEMenor", function(){
	it("deve entender numeros en orden nao sequiencial", function(){
		var algoritmo = new MaiorEMenor();
		algoritmo.encontra([5,15,7,9]);

		expect(algoritmo.pegaMaior()).toEqual(15);
		expect(algoritmo.pegaMenor()).toEqual(5);
	});
	it("deve entender numeros en orden crescente", function(){
		var algoritmo = new MaiorEMenor();
		algoritmo.encontra([5,6,7,8]);

		expect(algoritmo.pegaMaior()).toEqual(8);
		expect(algoritmo.pegaMenor()).toEqual(5);
	});
	it("deve entender numeros en orden decrescente", function(){
		var algoritmo = new MaiorEMenor();
		algoritmo.encontra([8,7,6,5]);

		expect(algoritmo.pegaMaior()).toEqual(8);
		expect(algoritmo.pegaMenor()).toEqual(5);
	});
});