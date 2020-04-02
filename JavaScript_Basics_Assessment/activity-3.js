// Activity 3: JavaScript Arrays and Loops
// Ryoh Shinohara

// Array with three names
const studentNames = ['jim', 'pam', 'nathan'];

// Prompts user to add three more names
for( let i = 0; i < 3; i++ )
{
    let name = prompt('enter a name');
    studentNames.push(name);
}

// Loops through to console log names
for( let i = 0; i < studentNames.length; i++ )
{
    console.log(studentNames[i]);
}