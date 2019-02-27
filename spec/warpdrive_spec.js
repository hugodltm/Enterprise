describe("Caso 1", function() {
    var wd = new nave();
    var data = wd.calcular(100, 0, 0, 0);

    it("A 100 mg/s ", function() {
        expect(data.fa).toEqual(100);
    });

    it("B 100 mg/s ", function() {
        expect(data.fb).toEqual(100);
    });

    it("C 100 mg/s ", function() {
        expect(data.fc).toEqual(100);
    });

    it("Tiempo infinito", function() {
        expect(wd.flowA.time).toEqual(-1);
    });

});

describe("Caso 2", function() {
    var wd = new nave();
    var data = wd.calcular(90, 0, 0, 0);

    it("A 90 mg/s ", function() {
        expect(data.fa).toEqual(90);
    });

    it("B 90 mg/s ", function() {
        expect(data.fb).toEqual(90);
    });

    it("C 90 mg/s ", function() {
        expect(data.fc).toEqual(90);
    });

    it("Tiempo infinito", function() {
        expect(data.time).toEqual(-1);
    });

});


describe("Caso 3", function() {
    var wd = new nave();
    var data = wd.calcular(30, 0, 0, 0);

    it("A 30 mg/s ", function() {
        expect(data.fa).toEqual(30);
    });

    it("B 30 mg/s ", function() {
        expect(data.fb).toEqual(30);
    });

    it("C 30 mg/s ", function() {
        expect(data.fc).toEqual(30);
    });

    it("Tiempo infinito", function() {
        expect(data.time).toEqual(-1);
    });

});


describe("Caso 4", function() {
    var wd = new nave();
    var data = wd.calcular(100, 20, 10, 0);

    it("A 90 mg/s ", function() {
        expect(data.fa).toEqual(90);
    });

    it("B 100 mg/s ", function() {
        expect(data.fb).toEqual(100);
    });

    it("C 110 mg/s ", function() {
        expect(data.fc).toEqual(110);
    });

    it("Tiempo 90 minutos", function() {
        expect(data.time).toEqual(90);
    });

});


describe("Caso 5", function() {
    var wd = new nave();
    var data = wd.calcular(80, 0, 0, 100);

    it("A 120 mg/s ", function() {
        expect(data.fa).toEqual(120);
    });

    it("B 120 mg/s ", function() {
        expect(data.fb).toEqual(120);
    });

    it("C 0 mg/s", function() {
        expect(data.fc).toEqual(0);
    });

    it("Tiempo 80 minutos", function() {
        expect(data.time).toEqual(80);
    });

});


describe("Caso 6", function() {
    var wd = new nave();
    var data = wd.calcular(150, 0, 0, 0);

    it("A 150 mg/s ", function() {
        expect(data.fa).toEqual(150);
    });

    it("B 150 mg/s ", function() {
        expect(data.fb).toEqual(150);
    });

    it("C 150 mg/s ", function() {
        expect(data.fc).toEqual(150);
    });

    it("Tiempo 50 minutos", function() {
        expect(data.time).toEqual(50);
    });

});

describe("Caso 7", function() {
    var wd = new nave();
    var data = wd.calcular(140, 0, 0, 30);

    it("A 150 mg/s ", function() {
        expect(data.fa).toEqual(150);
    });

    it("B 150 mg/s ", function() {
        expect(data.fb).toEqual(150);
    });

    it("C 120 mg/s ", function() {
        expect(data.fc).toEqual(120);
    });

    it("Tiempo 50 minutos", function() {
        expect(data.time).toEqual(50);
    });

});

describe("Caso 8", function() {
    var wd = new nave();
    var data = wd.calcular(170, 20, 50, 40);

    it("unable to comply ", function() {
        expect(data.fa).toEqual(null);
    });

    it("unable to comply ", function() {
        expect(data.fb).toEqual(null);
    });

    it("unable to comply ", function() {
        expect(data.fc).toEqual(null);
    });

    it("Tiempo 0 minutos ", function() {
        expect(data.time).toEqual(0);
    });

});
