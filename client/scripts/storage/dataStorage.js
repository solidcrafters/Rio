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

LocalDataStorage.prototype.add = function(data) {
    var dataId = this._getNextId();
    localStorage.setItem(dataId, angular.toJson(data));
    return dataId;
}

LocalDataStorage.prototype.get = function(dataId) {
    var serializedData = localStorage.getItem(dataId);
    return angular.fromJson(serializedData);
}

