// BUDGET CONTROLLER
var budgetController = (function() {

   // Some code

})();

// UI CONTROLLER
var UIController = (function() {

    // Some code 

})();


// GLOBAL APP CONTROLLER 
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {

        // 1. Get field input data

        // 2. Add the item to the budget controller

        // 3. Add new item to UI

        // 4. Calculate budget

        // 5. Display budget on UI

        console.log('it works')
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(e) {

        if (e.keyCode === 13 || e.which === 13) {
            ctrlAddItem();
        }

    });

})(budgetController, UIController);