
(function (){

    //Image links cannot be tiny.urls 
    var mockDB = [
        {_id: '1', name: 'Wooden Pencil', price: '200', type: 'pencil', image: "https://images.pexels.com/photos/159752/pencil-office-design-creative-159752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
        {_id: '2', name: 'Used Pencil', price: '23',  type: 'pencil', image: "https://images.pexels.com/photos/114119/pexels-photo-114119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
        {_id: '3', name: 'Mechanical Pencil', price: '2',  type: 'pencil', image: "https://images.pexels.com/photos/159585/stationery-pencil-mechanical-pencil-simple-159585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
        {_id: '4', name: 'Colored Pencil', price: '60',  type: 'pencil', image: "https://images.pexels.com/photos/194098/pexels-photo-194098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
        {_id: '5', name: 'Fancy Pencil', price: '50',  type: 'pencil', image: "https://images.pexels.com/photos/745759/pexels-photo-745759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
        {_id: '6', name: 'Ballpoint Pen', price: '8',  type: 'pen', image: "https://images.pexels.com/photos/867482/pexels-photo-867482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
        {_id: '7', name: 'Fountain Pen', price: '500',  type: 'pen', image: "https://images.pexels.com/photos/356372/pexels-photo-356372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
        {_id: '8', name: 'Markers', price: '23',  type: 'markers', image: "https://images.pexels.com/photos/1152665/pexels-photo-1152665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
       

        // { _id: '123', name: 'Article 1', published: true },
		// { _id: '583', name: 'Article 2', published: true },
		// { _id: '954', name: 'Article 3', published: false },
		// { _id: '384', name: 'Article 4', published: false },
		// { _id: '183', name: 'Article 5', published: true },
		// { _id: '007', name: 'Article 6', published: false },
		// { _id: '304', name: 'Article 7', published: true },
		// { _id: '729', name: 'Article 8', published: false },
		// { _id: '734', name: 'Article 9', published: true },
    ];

    function renderCards(results) {
        var products = document.querySelector('#all-cards');

        products.innerHTML = '';

        //The link for image sources need to be link to direct images on the internet
        var cards = results.map(function (result, index) {
            return '<div class="card d-flex my-card"> <image class="image" src=' + result.image + 
            '><div class="card-body"><p class="name">' + result.name + 
            '</p><p class="price">$' + result.price + '</p></div></div>'
        });

        cards.forEach(function (row) {
            products.innerHTML += row;
        });
    }

    renderCards(mockDB);

    function orderBy(sortValue) {
        var sortedResults = (sortValue === 'name') ?
            mockDB.sort(function (a,b) {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();

                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB)  {
                    return 1;
                }
            }):
            mockDB.sort(function (a,b) {
                return a[sortValue] - b[sortValue];
            });
        renderCards(sortedResults);
    }

    document.querySelector('#orderBy').addEventListener('change', function(event) {
        orderBy(event.target.value);
    });

    function toggleType(value) {
        var filteredResults = mockDB.filter(function (result) {
            var isType = false;

            if (value == 'all') {
                isType = true;
            }else if (result.type == value) {
                isType = true;
            }
            return isType;
        });
        renderCards(filteredResults);
    }

    document.querySelector('#type').addEventListener('change', function(event) {
        var value = event.target.value;
        toggleType(value);
    })

})();
