'use strict';

function LocalDataStorage() {

    var currentIdKey = 'CurrentId';

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

LocalDataStorage.prototype.add = function(document) {
    var documentId = this._getNextId();
    localStorage.setItem(documentId, angular.toJson(document));
    return documentId;
}

LocalDataStorage.prototype.get = function(documentId) {
    var serializedDocument = localStorage.getItem(documentId);
    return angular.fromJson(serializedDocument);
}

