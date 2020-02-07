
class Manager extends employee {
    constructor (name, id, email, office) {
        super (name, id, email);
        this.officeNumber = office;
        this.special = `Office: ${this.office}`;
    }
    getRole (){
        return "manager";
    }
    getOffice () {
        return this.officeNumber
    }
}
module.exports = Manager