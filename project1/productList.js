
(function (){
    var mockDB = [
        {_id: '1', name: 'Wooden Hanger', published: true, image: 'https://tinyurl.com/v46ysl8o'}


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
            return '<tr><td>' + index + '</td><td>' + result.name + '</td><td>' + 
            result._id + '</td><td>' + result.published + '</td></tr>';
        });

        tableRows.forEach(function (row){
            tableBody.innerHTML += row;
        });
    }

    renderList(mockDB);

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
