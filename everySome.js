function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function (submittedUser) {
            return goodUsers.some(function (goodUser) {
                return goodUser.id === submittedUser.id;
            });
        });
    };
}

module.exports = checkUsersValid;

// var everyHelper = function() {

// }

// var someHelper = function() {
    
// }

// function checkUsersValid(goodUsers) {

// }