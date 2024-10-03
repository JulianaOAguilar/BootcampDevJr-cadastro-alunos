
var categories = [

    { id: 1, name: "Java" },
    { id: 2, name: "Angular" },
    { id: 3, name: "C#" },
    { id: 4, name: "Python" },

]


var shifts = [

    { id: 1, name: "Manhã" },
    { id: 2, name: "Tarde" },
    { id: 3, name: "Noite" }

]



var students = [

    {
        id: 1,
        name: 'Pedro Antonio',
        email: 'pedro@abutua.com',
        telefone: '(15) 99999-9999',
        categories: 2,
        shifts: 2
    }

]

//on load
loadStudents();

//load students
function loadStudents() {
    for (let item of students)
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
    var CourseNode = document.createTextNode((categories[Item.categories - 1].name));
    cell = newRow.insertCell();
    cell.className="d-none d-md-table-cell";
    cell.appendChild(CourseNode);

    //Load the student's shift
    var shiftNode = document.createTextNode((shifts[Item.shifts - 1].name));
    cell = newRow.insertCell();
    cell.className="d-none d-md-table-cell";
    cell.appendChild(shiftNode);



}



function save() {

    var shiftSelected = document.querySelector('input[name="RadiusShifts"]:checked').value;


    var Item = {

        id: students.length + 1,
       name: document.getElementById("InputName").value,
       email: document.getElementById("InputEmail").value,
       telefone: document.getElementById("InputTelefone").value,
       categories: parseFloat(document.getElementById('SelectOption').value),
       shifts: parseFloat(shiftSelected)

    }
    AddNewRow(Item);
    students.push(Item);

    document.getElementById('FormStudent').reset(); 

}

