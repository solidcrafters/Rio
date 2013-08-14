'use strict';

function LocalDocumentStorage() {

    var prefix = 'rio:';
    var currentIdKey = prefix + 'CurrentDocumentId';

    if (!localStorage.getItem(currentIdKey)) {
        localStorage.setItem(currentIdKey, 0);
    }

    this._getNextId = function() {
        var currentId = localStorage.getItem(currentIdKey);
        currentId ++;
        localStorage.setItem(currentIdKey, currentId);
        return currentId.toString();
    }
}

LocalDocumentStorage.prototype.add = function(document) {
    var documentId = this._getNextId();
    localStorage.setItem(documentId, angular.toJson(document));
    return documentId;
}

LocalDocumentStorage.prototype.get = function(documentId) {
    var serializedDocument = localStorage.getItem(documentId);
    return angular.fromJson(serializedDocument);
}