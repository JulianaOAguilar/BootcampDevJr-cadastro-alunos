
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
    newRow.insertCell().appendChild(emailNode);

    //Load the student's  cellphone number
    var telefoneNode = document.createTextNode(Item.telefone);
    newRow.insertCell().appendChild(telefoneNode);

    //Load the student's course
    var CourseNode = document.createTextNode((category[Item.category - 1].name));
    newRow.insertCell().appendChild(CourseNode);

    //Load the student's shift
    var shiftNode = document.createTextNode((shift[Item.shift - 1].name));
    newRow.insertCell().appendChild(shiftNode);

}

//MEU DEUS EU TO ENTENDENDO KKKKK QUE LEGAL (obg prof glauco)
