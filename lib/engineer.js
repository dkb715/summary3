 class Engineer extends employee {
     constructor (name, id, email, github) {
         this.github=github
         super (name, id, email)
     }
     getRole () {
         return "engineer"
     }
     getGithub () {
         return this.github
     }
 }
 module.exports = Engineer 