// const person = {};
// person.name = 'Code Mafia'

const person = {
    name: ['Code', 'Mafia'],
    age: 32,
    gender: 'male',
    interests: {
        sports: 'soccer',
        music: 'piano'
    },
    getFullname: function () {
        console.log(this.name[0] + this.name[1])
    }
};
person['age'] = 12;
console.log(person.age)

person.getFullname();

