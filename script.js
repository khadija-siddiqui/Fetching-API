fetch("https://randomuser.me/api/?results=5")
.then((data) => {
    //console.log(data); json format
    return data.json(); //converted to object
})
.then((objectData)=>{
    //console.log(objectData[1].gender);
    console.log(objectData.results[0].name.title);
    let tableData = "";
    objectData.results.map((values) => {
        //first name in the table
        //city in the table
        // += to get whole data, otherwise gives last data
        tableData += `<tr>
            <td>${values.name.first}</td> 
            <td>${values.location.city}</td>
        </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;

}).catch((err) => {
    console.log("ERROR: Problem with fetch operation", err);
})