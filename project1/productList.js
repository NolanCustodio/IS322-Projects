
(function (){

    //Image links cannot be tiny.urls 
    var mockDB = [
        {_id: '1', name: 'Wooden Hanger', price: '$200', published: true, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-quO1DzKNljY%2FTbhzulo8g8I%2FAAAAAAAABfU%2FIOFZTBhgazA%2Fs1600%2FWooden-Hanger-for-Clothes-MC010-.jpg&f=1&nofb=1"},
        {_id: '1', name: 'Wooden Hanger', price: '$200', published: true, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-quO1DzKNljY%2FTbhzulo8g8I%2FAAAAAAAABfU%2FIOFZTBhgazA%2Fs1600%2FWooden-Hanger-for-Clothes-MC010-.jpg&f=1&nofb=1"},
        {_id: '1', name: 'Wooden Hanger', price: '$200', published: true, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-quO1DzKNljY%2FTbhzulo8g8I%2FAAAAAAAABfU%2FIOFZTBhgazA%2Fs1600%2FWooden-Hanger-for-Clothes-MC010-.jpg&f=1&nofb=1"},
        {_id: '1', name: 'Wooden Hanger', price: '$200', published: true, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-quO1DzKNljY%2FTbhzulo8g8I%2FAAAAAAAABfU%2FIOFZTBhgazA%2Fs1600%2FWooden-Hanger-for-Clothes-MC010-.jpg&f=1&nofb=1"},
        {_id: '1', name: 'Wooden Hanger', price: '$200', published: true, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-quO1DzKNljY%2FTbhzulo8g8I%2FAAAAAAAABfU%2FIOFZTBhgazA%2Fs1600%2FWooden-Hanger-for-Clothes-MC010-.jpg&f=1&nofb=1"},
        {_id: '1', name: 'Wooden Hanger', price: '$200', published: true, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-quO1DzKNljY%2FTbhzulo8g8I%2FAAAAAAAABfU%2FIOFZTBhgazA%2Fs1600%2FWooden-Hanger-for-Clothes-MC010-.jpg&f=1&nofb=1"},
        {_id: '1', name: 'Wooden Hanger', price: '$200', published: true, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-quO1DzKNljY%2FTbhzulo8g8I%2FAAAAAAAABfU%2FIOFZTBhgazA%2Fs1600%2FWooden-Hanger-for-Clothes-MC010-.jpg&f=1&nofb=1"},
        {_id: '2', name: 'Nice Hanger', price: '$300', published: true, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-quO1DzKNljY%2FTbhzulo8g8I%2FAAAAAAAABfU%2FIOFZTBhgazA%2Fs1600%2FWooden-Hanger-for-Clothes-MC010-.jpg&f=1&nofb=1"}


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

    function renderList(results) {
        var tableBody = document.querySelector('#results-table tbody');

        tableBody.innerHTML = '';

        var tableRows = results.map(function (result, index) {
            return '<tr class="wow"><td>' + index + '</td><td>' + result.name + '</td><td>' + 
            result._id + '</td><td>' + result.published + '</td></tr>';
        });

        tableRows.forEach(function (row){
            tableBody.innerHTML += row;
        });
    }

    // renderList(mockDB);

    function renderCards(results) {
        var products = document.querySelector('#all-cards');

        products.innerHTML = '';

        //The link for image sources need to be link to direct images on the internet
        var cards = results.map(function (result, index) {
            return '<div class="card d-flex"> <image class="image" src=' + result.image + 
            '<div class="card-body"><p class="name">' + result.name + 
            '</p><p class="price">' + result.price + '</p></div></div>'
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
                returna[sortValue] - b[sortValue];
            });
        renderList(sortedResults);
    }

    document.querySelector('#orderBy').addEventListener('change', function(event) {
        orderBy(event,target,value);
    });

    function togglePublished(showPublished) {
        var filteredResults = mockDB.filter(function (result) {
            return showPublished || result.published;
        });
        renderList(filteredResults);
    }

    document.querySelector('#published').addEventListener('change', function(event) {
        var value = event.target.value === 'true';
        togglePublished(value);
    })

})();
