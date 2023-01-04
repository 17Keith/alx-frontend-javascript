/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return ("Working from home");
    };
    Director.prototype.getCoffeeBreak = function () {
        return ("Getting a coffee break");
    };
    Director.prototype.workDirectorTask = function () {
        return ("Getting to directors tasks");
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return ("Cannot work from home");
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return ("Cannot have a break");
    };
    Teacher.prototype.workTeacherTask = function () {
        return ("Getting to work");
    };
    return Teacher;
}());
function createEmployee(salary) {
    return typeof salary === 'number' && salary < 500 ? new Teacher() : new Director();
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O0FBWUE7SUFBQTtJQVdBLENBQUM7SUFWRywrQkFBWSxHQUFaO1FBQ0ksT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELGlDQUFjLEdBQWQ7UUFDSSxPQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsbUNBQWdCLEdBQWhCO1FBQ0ksT0FBTSxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVMLGVBQUM7QUFBRCxDQUFDO0FBRUQ7SUFBQTtJQVVBLENBQUM7SUFURyw4QkFBWSxHQUFaO1FBQ0ksT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELGdDQUFjLEdBQWQ7UUFDSSxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsaUNBQWUsR0FBZjtRQUNJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztJQUM5QixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxNQUF1QjtJQUMzQyxPQUFPLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ3ZGLENBQUM7QUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRWpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFFbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuICAgIHdvcmtEaXJlY3RvclRhc2soKTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gICAgd29ya1RlYWNoZXJUYXNrKCk6IHN0cmluZztcbn1cblxuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAoXCJXb3JraW5nIGZyb20gaG9tZVwiKTtcbiAgICB9XG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuKFwiR2V0dGluZyBhIGNvZmZlZSBicmVha1wiKTtcbiAgICB9XG4gICAgd29ya0RpcmVjdG9yVGFzaygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4oXCJHZXR0aW5nIHRvIGRpcmVjdG9ycyB0YXNrc1wiKTtcbiAgICB9XG5cbn1cblxuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKFwiQ2Fubm90IHdvcmsgZnJvbSBob21lXCIpO1xuICAgIH1cbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKFwiQ2Fubm90IGhhdmUgYSBicmVha1wiKTtcbiAgICB9XG4gICAgd29ya1RlYWNoZXJUYXNrKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAoXCJHZXR0aW5nIHRvIHdvcmtcIilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHNhbGFyeTogbnVtYmVyIHwgc3RyaW5nICk6IFRlYWNoZXIgfCBEaXJlY3RvciB7XG4gICAgcmV0dXJuIHR5cGVvZiBzYWxhcnkgPT09ICdudW1iZXInICYmIHNhbGFyeSA8IDUwMCA/IG5ldyBUZWFjaGVyKCkgOiBuZXcgRGlyZWN0b3IoKTtcbn1cbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDIwMCkpO1xuXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgxMDAwKSk7XG5cbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKCckNTAwJykpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9