(function () {

    const mockDB = [
        {}
    ]

    function renderList (results){
        let tableBody = document.querySelector('#resultsTable tbody');

        tableBody.innerHTML = '';

        let tableRows = results.map(function (result, index){
            return '<tr><td>' + index + '</td><td>" + result.name' + '</td><td>' +
                result._id + '</td><td>' + result.published + '</td></tr>';
        });

        tableRows.forEach(function (row) {
            tableBody.innerHTML += row;
        })
    }

    renderList(mockDB);

    function orderBy(sortValue){
        let sortedResults = (sortValue === 'name') ?
            mockDB.sort(function (a,b) {
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();

                if (nameA < nameB){
                    return -1;
                }
                if (nameA > nameB){
                    return 1;
                }
            }) :
            mockDB.sort(function (a,b) {
                return a[sortValue] - b[sortValue];
            });
            renderList(sortedResults);
    }

    document.querySelector('#orderBy').addEventListener('change',function(event){
        orderBy(event.target.value);
    })

    function togglePublished(showPublished) {
        let filteredResults = mockDB.filter(function (result) {
            return showPublsihed || result.published;
        });
        renderList(filteredResults);
    }
    
    document.querySelector('#published').addEventListener('change', function(event) {
        let value= event.target.value === 'true';
        togglePublished(value);
    });

}) ();