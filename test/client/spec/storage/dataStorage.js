'use strict';


describe('Data Storage service', function () {

    var dataStorage;

    beforeEach(function () {
        dataStorage = new LocalDataStorage();
    });

    it('should add a any data to storage', function () {
        var anyValue = 234;
        var anyData = {
            anyValue: anyValue
        };

        var dataId = dataStorage.add(anyData);

        var dataFound = dataStorage.get(dataId);
        dataFound.should.not.be.undefined;
        dataFound.anyValue.should.deep.equal(anyValue);
    });

    it('should add safely 2 data to storage', function () {

        var dataOneId = dataStorage.add({});
        var dataTwoId = dataStorage.add({});

        dataOneId.should.not.equal(dataTwoId);
    });

    it('should give a consistent id across many storages', function () {
        var secondDataStorage = new LocalDataStorage();
        dataStorage.should.not.deep.equal(secondDataStorage);

        var dataOneId = dataStorage.add({});
        var dataTwoId = secondDataStorage.add({});

        dataOneId.should.not.equal(dataTwoId);
    });
});
