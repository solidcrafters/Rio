'use strict';


describe('Local DataStorage service', function() {

    it('should add a document to local storage', function() {
        var localDocumentStorage = new LocalDocumentStorage();

        var amount = 234.15;
        var documentId = localDocumentStorage.add({
            amount: amount
        });

        var document = localDocumentStorage.get(documentId);
        document.should.not.be.undefined;
        document.amount.should.deep.equal(amount);
    });

    it('should add safely 2 documents to local storage', function() {
        var localDocumentStorage = new LocalDocumentStorage();

        var documentOneId = localDocumentStorage.add({});
        var documentTwoId = localDocumentStorage.add({});

        documentOneId.should.not.equal(documentTwoId);
    });

    it('should give a consistent id across localStorage lifetime', function() {
        var firstLocalDocumentStorage = new LocalDocumentStorage();
        var secondLocalDocumentStorage = new LocalDocumentStorage();

        var documentOneId = firstLocalDocumentStorage.add({});
        var documentTwoId = secondLocalDocumentStorage.add({});

        documentOneId.should.not.equal(documentTwoId);
    })
});
