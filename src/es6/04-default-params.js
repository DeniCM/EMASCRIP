
// antigua estructura 

function newUser (name , age, country) {
    var name = name || 'oscar';
    var age = age || 34;
    var country = country || 'mx'
    console.log(name , age, country);

}

newUser();
newUser('david', 15 , 'Co');


// Nueva estructura 
 function newAdmin ( name = 'oscar',  age = 34, country = 'PE')
 {
    console.log(name, age , country)
 }

 newAdmin ();
newAdmin ( 'carlos',56 , 'UR' );``