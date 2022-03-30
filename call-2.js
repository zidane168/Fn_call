// goi ham va bind this, trong use strict van co this ney dc bind?

'use strict'

this.firstName = 'Vi'
this.lastName = 'Learn Tech Tips'

function showFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
}

// showFullName() //call-2.js:9 Uncaught TypeError: Cannot read properties of undefined (reading 'firstName')
showFullName.call(this) 

