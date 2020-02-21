function dataFetch (){
    let url = 'http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2';
    let options = {
        method:'GET',
        // headers: {
        //     "Content-Type": "application/json"
        // }
    };
    // const renderData = ( data ) => {
    //     data.map( item => {
    //         document.body.innerHTML += `<h2>${item.id}</h2>`;
    //     })
    // }
    let x = fetch( url, options )
}
document.addEventListener('DOMContentLoaded', () => {
    dataFetch();
});

