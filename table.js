var body=document.getElementById('body');
var searchbox=document.getElementById('search-box');
var people = [
    {
    "firstname": "praveen",
    "lastname": "gubbala",
    "age": 36,
    "gender": "male",
    "city": "hyd",
    "salary": 10000
    },
    {
    "firstname": "srikanth",
    "lastname": "gubbala",
    "age": 32,
    "gender": "male",
    "city": "bengaluru",
    "salary": 20000
    },
    {
    "firstname": "pradeep",
    "lastname": "reddy",
    "age": 21,
    "gender": "male",
    "city": "hyd",
    "salary": 25000
    },
    {
    "firstname": "mounika",
    "lastname": "mudiraj",
    "age": 20,
    "gender": "female",
    "city": "nalgonda",
    "salary": 30000
    },
    {
    "firstname": "nikhil",
    "lastname": "m",
    "age": 22,
    "gender": "male",
    "city": "guntur",
    "salary": 2000
    },
    {
    "firstname": "riya",
    "lastname": "bhadouria",
    "age": 14,
    "gender": "female",
    "city": "indore",
    "salary": 40000
    }
    ];
        result(people);
        function sortacd(){
            people.sort((a,b)=>{
                return a.firstname.toLowerCase() > b.firstname.toLowerCase() ? -1 : 1;
            })
            document.getElementById('body').innerHTML='';
            result(people);
        }

        function sortdec(){
            people.sort((a,b)=>{
                return a.firstname.toLowerCase() > b.firstname.toLowerCase() ? 1 : -1;
            })
            document.getElementById('body').innerHTML='';
            result(people);
        }

        function search(){
            var filter=people.filter(i=>{
                return i.firstname.toLowerCase().startsWith(searchbox.value.toLowerCase());
            })
            document.getElementById('body').innerHTML='';
            result(filter);
        }

        function result(people){
       for(var i=0;i<people.length;i++){
        var tr=document.createElement('tr');
        var td1=document.createElement('td');
        td1.innerHTML=people[i].firstname;
        var td2=document.createElement('td');
        td2.innerHTML=people[i].lastname;
        var td3=document.createElement('td');
        td3.innerHTML=people[i].age;
        var td4=document.createElement('td');
        td4.innerHTML=people[i].gender;
        var td5=document.createElement('td');
        td5.innerHTML=people[i].city;
        var td6=document.createElement('td');
        td6.innerHTML=people[i].salary;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        body.appendChild(tr);
    }
}
    