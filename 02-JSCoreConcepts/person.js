class Person
{
    firstName = null;
    lastName = null;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return this.firstName + ' ' + this.lastName.toUpperCase();
    }

    getInitials(){
        return this.firstName[0].toUpperCase() + '.' + this.lastName[0].toUpperCase();
    }
}

var firstPerson = new Person("Jan", "Nowak");
console.log(firstPerson.getFullName());
console.log(firstPerson.getInitials());

var secondPerson = new Person("Karolina", "Pytlak");
console.log(secondPerson.getFullName());
console.log(secondPerson.getInitials());