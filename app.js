let data = [
    {
      name: 'Kelly',
      age: '44' 
    },
    {   
      name: 'Mark',
      age: '25'  
    },
    {
        name: 'Nick',
        age: '36' 
      },
      {
        name: 'Pam',
        age: '25'  
      },
      {
        name: 'John',
        age: '32' 
      },
      {
        name: 'Brian',
        age: '31'  
      },   
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>'+ item.name + ' ' +' is ' + ' ' + ' ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');


