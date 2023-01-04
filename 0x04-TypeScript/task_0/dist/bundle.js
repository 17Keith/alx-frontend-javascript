/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var student1 = {
    firstName: "Keith",
    lastName: "Obando",
    age: 22,
    location: "Nairobi"
};
var student2 = {
    firstName: "Diana",
    lastName: "A",
    age: 22,
    location: "Nairobi"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tableBody = document.createElement('tableBody');
table.style.background = "white";
table.appendChild(tableBody);
studentsList.forEach(function (student) {
    var row = document.createElement('t-r');
    var nameCell = document.createElement('t-n');
    var locationCell = document.createElement('t-l');
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O0FBT0EsSUFBTSxRQUFRLEdBQVk7SUFDdEIsU0FBUyxFQUFFLE9BQU87SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUUsU0FBUztDQUN0QjtBQUVELElBQU0sUUFBUSxHQUFZO0lBQ3RCLFNBQVMsRUFBRSxPQUFPO0lBQ2xCLFFBQVEsRUFBRSxHQUFHO0lBQ2IsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUUsU0FBUztDQUN0QjtBQUVELElBQU0sWUFBWSxHQUFjLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3JELElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDOUMsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUV0RCxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7QUFDakMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUU3QixZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBZ0I7SUFDbEMsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUxQyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbkQsUUFBUSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ3pDLFlBQVksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUM1QyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQztJQUMxQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQztJQUM5QyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDL0IsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ25DLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQyxDQUFDO0FBQ0gsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFN0dWRlbnQge1xuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIGxhc3ROYW1lOiBzdHJpbmc7XG4gICAgYWdlOiBudW1iZXI7XG4gICAgbG9jYXRpb246IHN0cmluZztcbn1cblxuY29uc3Qgc3R1ZGVudDE6IFN0dWRlbnQgPSB7XG4gICAgZmlyc3ROYW1lOiBcIktlaXRoXCIsXG4gICAgbGFzdE5hbWU6IFwiT2JhbmRvXCIsXG4gICAgYWdlOiAyMixcbiAgICBsb2NhdGlvbjogXCJOYWlyb2JpXCJcbn1cblxuY29uc3Qgc3R1ZGVudDI6IFN0dWRlbnQgPSB7XG4gICAgZmlyc3ROYW1lOiBcIkRpYW5hXCIsXG4gICAgbGFzdE5hbWU6IFwiQVwiLFxuICAgIGFnZTogMjIsXG4gICAgbG9jYXRpb246IFwiTmFpcm9iaVwiXG59XG5cbmNvbnN0IHN0dWRlbnRzTGlzdDogU3R1ZGVudFtdID0gW3N0dWRlbnQxLCBzdHVkZW50Ml07XG5jb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG5jb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZUJvZHknKTtcblxudGFibGUuc3R5bGUuYmFja2dyb3VuZCA9IFwid2hpdGVcIjtcbnRhYmxlLmFwcGVuZENoaWxkKHRhYmxlQm9keSk7XG5cbnN0dWRlbnRzTGlzdC5mb3JFYWNoKChzdHVkZW50OiBTdHVkZW50KSA9PiB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndC1yJyk7XG5cbiAgICBjb25zdCBuYW1lQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3QtbicpO1xuICAgIGNvbnN0IGxvY2F0aW9uQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3QtbCcpO1xuXG4gICAgbmFtZUNlbGwudGV4dENvbnRlbnQgPSBzdHVkZW50LmZpcnN0TmFtZTtcbiAgICBsb2NhdGlvbkNlbGwudGV4dENvbnRlbnQgPSBzdHVkZW50LmxvY2F0aW9uO1xuICAgIG5hbWVDZWxsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGJsYWNrXCI7XG4gICAgbG9jYXRpb25DZWxsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGJsYWNrXCI7XG4gICAgbmFtZUNlbGwuc3R5bGUucGFkZGluZyA9IFwiNXB4XCI7XG4gICAgbG9jYXRpb25DZWxsLnN0eWxlLnBhZGRpbmcgPSBcIjVweFwiO1xuICAgIHJvdy5hcHBlbmRDaGlsZChuYW1lQ2VsbCk7XG4gICAgcm93LmFwcGVuZENoaWxkKGxvY2F0aW9uQ2VsbCk7XG4gICAgdGFibGVCb2R5LmFwcGVuZENoaWxkKHJvdyk7XG59KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFibGUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9