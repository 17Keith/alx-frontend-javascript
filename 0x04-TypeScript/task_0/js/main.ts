interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Keith",
    lastName: "Obando",
    age: 22,
    location: "Nairobi"
}

const student2: Student = {
    firstName: "Diana",
    lastName: "A",
    age: 22,
    location: "Nairobi"
}

const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');
const tableBody = document.createElement('tableBody');

table.style.background = "white";
table.appendChild(tableBody);

studentsList.forEach((student: Student) => {
    const row = document.createElement('t-r');

    const nameCell = document.createElement('t-n');
    const locationCell = document.createElement('t-l');

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    nameCell.style.border = "1px solid black";
    locationCell.style.border = "1px solid black";
    nameCell.style.padding = "5px";
    locationCell.style.padding = "5px";
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});
document.body.appendChild(table);
