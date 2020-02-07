
class Intern extends employee {
    constructor (name, id, email, school) {
        this.school=school
        super (name, id, email)
    }
    getRole () {
        return "intern";
    }
    getSchool () {
        return this.school
    }
}
module.exports = Intern