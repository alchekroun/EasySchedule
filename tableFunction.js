    var test = document.getElementById('dataTableCourse').rows[0].cells.length
    var ipnt = document.getElementById('button1').onclick
    var testName = document.getElementById('dataTableCourse').rows[0].cells[0].className
    var testTd = document.getElementById('dataTableCourse').rows[0].cells[0]
    function addRow(tableID) {
    try {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var nbColonne = document.getElementById(tableID).rows[0].cells.length
    for (var i = 0; i < nbColonne -1; i++) {
    //Column
    var idNameCell = document.getElementById(tableID).rows[1].cells[i].className
    var cell = row.insertCell(i);
    var element = document.createElement("input");
    element.type = document.getElementById(idNameCell + '1').type; //Nom de la cellule + 1 pour avoir la 1ere rows du tableau
    var btnName = idNameCell + (rowCount);
    element.id = btnName;
    element.name = btnName;
    cell.appendChild(element);
}
    //Column Delete
    var cell = row.insertCell(-1);
    var element = document.createElement("input");
    element.type = "button";
    var btnName = "button" + (rowCount);
    element.name = btnName;
    element.setAttribute('value', 'Delete'); // or element.value = "Delete";
    //element.onclick = function () { removeRow(btnName, tableID); }
    element.setAttribute("onclick", "removeRow('"+btnName+"', '"+tableID+"')");
    cell.appendChild(element);
}
    catch (e) {
    alert(e);
}
}

    function removeRow(btnName, tableID) {
    try {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    var nbColonne = document.getElementById(tableID).rows[0].cells.length-1
    //i=1 pour sauter la 1ere ligne correspondant au titre du tableau
    for (var i = 2; i < rowCount; i++) {
    var row = table.rows[i];
    var rowObj = row.cells[nbColonne].childNodes[0];
    var nametest = rowObj.name
    if (rowObj.name == btnName) {
    table.deleteRow(i);
    rowCount--;
}
}
}
    catch (e) {
    alert(e);
}
}

    function remplissageTableau(tableID, tableauToAdd) {
    try {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    var nbColonne = document.getElementById(tableID).rows[0].cells.length
    var tableauFinal = []
    for (i = 1; i < rowCount; i++) {
    var tableau = {};
    for (var c = 0; c < nbColonne - 1; c++) {
    var idNameCell = document.getElementById(tableID).rows[1].cells[c].className
    tableau[idNameCell] = document.getElementById(idNameCell + i).value
}
    tableauFinal.push(tableau)
}
    var jsonArray = JSON.stringify(tableauFinal);
    document.getElementById(tableauToAdd).value = jsonArray;
    var test = document.getElementById(tableauToAdd).value
}catch (e) {
    alert(e);
}

}

    function submitForm(){
    var tableauProf = document.getElementById('tableauProf').value
    objProf = JSON.parse(tableauProf)
    var tableauMatiere = document.getElementById('tableauMatiere').value
    objMatiere = JSON.parse(tableauMatiere)
    document.forms["form"].submit();
}