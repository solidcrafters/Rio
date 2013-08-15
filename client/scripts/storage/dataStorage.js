'use strict';


function LocalDataStorage() {

    var currentIdKey = 'CurrentId';

    if (!localStorage.getItem(currentIdKey)) {
        localStorage.setItem(currentIdKey, 0);
    }

    function getNextId () {
        var currentId = localStorage.getItem(currentIdKey);
        currentId ++;
        localStorage.setItem(currentIdKey, currentId);
        return currentId.toString();
    }


    function add (data) {
        var dataId = getNextId();
        localStorage.setItem(dataId, angular.toJson(data));
        return dataId;
    }

    function get(dataId) {
        var serializedData = localStorage.getItem(dataId);
        return angular.fromJson(serializedData);
    }

    return {
        add : add,
        get : get
    }

}
