
var category = [

    { id: 1, name: "Java" },
    { id: 2, name: "Angular" },
    { id: 3, name: "C#" },
    { id: 4, name: "Python" },

]


var shift = [

    { id: 1, name: "Manhã" },
    { id: 2, name: "Tarde" },
    { id: 3, name: "Noite" }

]



var student = [

    {
        id: 1,
        name: 'Pedro Antonio',
        email: 'pedro@abutua.com',
        telefone: '(15) 99999-9999',
        category: 2,
        shift: 2
    }

]

//on load
loadStudent();

//load students
function loadStudent() {
    for (let item of student)
        AddNewRow(item);
}

function AddNewRow(Item) {


    var table = document.getElementById("StudentsTable");
    var newRow = table.insertRow();

    //Load the student's ID
    var idNode = document.createTextNode(Item.id);
    newRow.insertCell().appendChild(idNode);

    //Load the student's name
    var nameNode = document.createTextNode(Item.name);
    newRow.insertCell().appendChild(nameNode);

    //Load the student's email
    var emailNode = document.createTextNode(Item.email);
    var cell = newRow.insertCell();
    cell.className="d-none d-md-table-cell";
    cell.appendChild(emailNode);

    //Load the student's  cellphone number
    var telefoneNode = document.createTextNode(Item.telefone);
    cell = newRow.insertCell();
    cell.className="d-none d-md-table-cell";
    cell.appendChild(telefoneNode);
    

    //Load the student's course
    var CourseNode = document.createTextNode((category[Item.category - 1].name));
    cell = newRow.insertCell();
    cell.className="d-none d-md-table-cell";
    cell.appendChild(CourseNode);

    //Load the student's shift
    var shiftNode = document.createTextNode((shift[Item.shift - 1].name));
    cell = newRow.insertCell();
    cell.className="d-none d-md-table-cell";
    cell.appendChild(shiftNode);



}



function save() {

    var shiftSelected = document.querySelector('input[name="RadiusShift"]:checked').value;


    var Item = {

        id: student.length + 1,
       name: document.getElementById("InputName").value,
       email: document.getElementById("InputEmail").value,
       telefone: document.getElementById("InputTelefone").value,
       category: parseFloat(document.getElementById('SelectOption').value),
       shift: parseFloat(shiftSelected)

    }
    AddNewRow(Item);
    student.push(Item);

    document.getElementById('FormStudent').reset(); 

}

