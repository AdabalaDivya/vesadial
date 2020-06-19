function filesGetting(file,callback){
    var ajaxCall=new XMLHttpRequest();
    ajaxCall.overrideMimeType("aplication/json");
    ajaxCall.open("GET",file,true);
    ajaxCall.onreadystatechange=function(){
        if(ajaxCall.readyState===4 && ajaxCall.status=="200"){
            callback(ajaxCall.responseText);
        }
    }
    ajaxCall.send(null);
}
filesGetting("data.json",function(jsondata){
    var data=JSON.parse(jsondata);
    console.log(data);
    details(data.profiledata);
    carrier(data.carrier);
    educational(data.mydata);
    technical(data.tech);
    personal(data.personalskills);
    project(data.projects);
    workshop(data.wrshp);
    achievements(data.achives);
    persda(data.pedat);
    decl(data.dec);
})

var body=document.getElementById('root');
body.classList.add("body");

var d= document.createElement("div");
d.classList.add("main");
body.appendChild(d);

var left =document.createElement("div");
left.classList.add("left");
d.appendChild(left);

var right =document.createElement("div");
right.classList.add("right");
d.appendChild(right);

function details(da) 
{
    var image = document.createElement("img");
    image.classList.add("img");
    image.src=da.image;
    left.appendChild(image);


    var name = document.createElement("h2");
    name.classList.add('tex');
    name.setAttribute("id","name");   
    name.textContent=da.nameprofile;
    left.appendChild(name);

    var name = document.createElement("h2");
    name.classList.add('tex');
    name.setAttribute("id","cateogory");   
    name.textContent=da.cateogary;
    name.appendChild(document.createElement('HR'));
    left.appendChild(name);

    var dl=document.createElement('dl');
    var dt=document.createElement('dt');
    dt.textContent="phone no :";
    var dd=document.createElement('dd');
    dd.textContent=da.mobile;
    dt.appendChild(dd);
    dl.appendChild(dt);
    left.appendChild(dl);

    var dl1=document.createElement('dl');
    var dt1=document.createElement('dt');
    dt1.textContent="Email :";
    var dd1=document.createElement('dd');
    dd1.textContent=da.email;
    dt1.appendChild(dd1);
    dl1.appendChild(dt1);
    left.appendChild(dl1);
}

function carrier(d) 
{
var d2 = document.createElement("div");
d2.classList.add("carrier");
var h1 = document.createElement("h1");
h1.textContent="Carrier Objective";
d2.appendChild(h1)
h1.appendChild(document.createElement("HR"));
var p = document.createElement("p");
p.classList.add("carrier");
p.textContent=d.carr;
d2.appendChild(p);
right.appendChild(d2)
}

function educational(sdc)
{
    var d1 = document.createElement("div");
    right.appendChild(d1);
    var h1=document.createElement("h1");
    h1.textContent="Educational Details";
    d1.appendChild(h1);
    // d1.appendChild(document.createElement("HR"));

   var table = document.createElement("table");   //TABLE 
   var tr = table.insertRow(-1);                  //TABLE ROW
    var col = [];
       for (var i = 0; i < sdc.length; i++) {
        for (var key in sdc[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML=col[i];
        tr.appendChild(th);
    }
   
    for (var i = 0; i < sdc.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var td = tr.insertCell(-1);   //TABLE DATA
            td.innerHTML = sdc[i][col[j]];
        }
    }
    table.classList.add('table');
    tr.classList.add('tr');
    th.classList.add('th');
    td.classList.add('td');
    table.appendChild(tr);
    right.appendChild(table);
}

function technical(t){
    var d1 = document.createElement("div");
    right.appendChild(d1);
    var h1=document.createElement("h1");
    h1.textContent="Technical Skills";
    d1.appendChild(h1);
    // d1.appendChild(document.createElement("HR"));

    // var h4=document.createElement('h4');
    // h4.textContent="Programming Languages :";
    // h4.textContent= t.Programminglanguages
    // d1.appendChild(h4);
   for(i in t){
    var ul = document.createElement("ul");
    ul.classList.add("ul");
    var li =document.createElement("li");
    li.textContent = "Pragramming Languages :"+t[i].Programminglanguages;
    ul.appendChild(li);
    right.appendChild(ul);
    var li =document.createElement("li");
    li.textContent = "WebTechnologies :"+t[i].WebTechnologies;
    ul.appendChild(li);
    right.appendChild(ul);
    var li =document.createElement("li");
    li.textContent = "DBMS   :"+t[i].DBMS;
    ul.appendChild(li);
    right.appendChild(ul);
    var li =document.createElement("li");
    li.textContent = "Package  :"+t[i].Package;
    ul.appendChild(li);
    right.appendChild(ul);
    var li =document.createElement("li");
    li.textContent = "Operatingsystem :"+t[i].Operatingsystem;
    ul.appendChild(li);
    right.appendChild(ul);
    d1.appendChild(ul);
   }   
}
function personal(p){
    var d1 = document.createElement("div");
    right.appendChild(d1);
    var h1=document.createElement("h1");
    h1.textContent="Personal Skills";
    d1.appendChild(h1);
    // d1.appendChild(document.createElement("HR"));

   for(i in p){
    var ul = document.createElement("ul");
    ul.classList.add("ul");
    var li =document.createElement("li");
    li.textContent = p[i].sk1;
    ul.appendChild(li);
    right.appendChild(ul);
    var li =document.createElement("li");
    li.textContent = p[i].sk2;
    ul.appendChild(li);
    right.appendChild(ul);
    var li =document.createElement("li");
    li.textContent =p[i].sk3;
    ul.appendChild(li);
    right.appendChild(ul);
    var li =document.createElement("li");
    li.textContent = p[i].sk4;
    ul.appendChild(li);
    right.appendChild(ul);
    d1.appendChild(ul);
   }   
}
function project(pro){
    var d1 = document.createElement("div");
    right.appendChild(d1);
    var h1=document.createElement("h1");
    h1.textContent="Projects";
    d1.appendChild(h1);
    // d1.appendChild(document.createElement("HR"));

   for(i in pro){
    var ul = document.createElement("ul");
    ul.classList.add("ul");
    var li =document.createElement("li");
    li.textContent = pro[i].pr1;
    ul.appendChild(li);
    right.appendChild(ul);
    var li =document.createElement("li");
    li.textContent = pro[i].pr2;
    ul.appendChild(li);
    right.appendChild(ul);
    d1.appendChild(ul);
   }   
}
function workshop(w){
    var d1 = document.createElement("div");
    right.appendChild(d1);
    var h1=document.createElement("h1");
    h1.textContent="WORKSHOPS/INTERNSHIPS:";
    d1.appendChild(h1);
    // d1.appendChild(document.createElement("HR"));

    // var h4=document.createElement('h4');
    // h4.textContent="Programming Languages :";
    // h4.textContent= t.Programminglanguages
    // d1.appendChild(h4);
   for(i in w){
    var ul = document.createElement("ul");
    ul.classList.add("ul");
    var li =document.createElement("li");
    li.textContent = w[i].wr1;
    ul.appendChild(li);
    right.appendChild(ul);
    var li =document.createElement("li");
    li.textContent = w[i].wr2;
    ul.appendChild(li);
    right.appendChild(ul);
    var li =document.createElement("li");
    li.textContent = w[i].wr3;
    ul.appendChild(li);
    right.appendChild(ul);
    var li =document.createElement("li");
    li.textContent = w[i].wr4;
    ul.appendChild(li);
    right.appendChild(ul);
    var li =document.createElement("li");
    li.textContent = w[i].wr5;
    ul.appendChild(li);
    right.appendChild(ul);
    d1.appendChild(ul);
   }   
}
function achievements(a){
    var d1 = document.createElement("div");
    right.appendChild(d1);
    var h1=document.createElement("h1");
    h1.textContent="ACHEIVEMENTS: ";
    d1.appendChild(h1);
    // d1.appendChild(document.createElement("HR"));

    // var h4=document.createElement('h4');
    // h4.textContent="Programming Languages :";
    // h4.textContent= t.Programminglanguages
    // d1.appendChild(h4);
   for(i in a){
    var ul = document.createElement("ul");
    ul.classList.add("ul");
    var li =document.createElement("li");
    li.textContent = a[i].ach1;
    ul.appendChild(li);
    right.appendChild(ul);
    var li =document.createElement("li");
    li.textContent = a[i].ach2;
    ul.appendChild(li);
    right.appendChild(ul);
    var li =document.createElement("li");
    li.textContent = a[i].ach3;
    ul.appendChild(li);
    right.appendChild(ul);
    var li =document.createElement("li");
    li.textContent = a[i].ach4;
    ul.appendChild(li);
    right.appendChild(ul);
    var li =document.createElement("li");
    li.textContent =a[i].ach5;
    ul.appendChild(li);
    right.appendChild(ul);
    d1.appendChild(ul);
   }   
}
function persda(ped){
    var d1 = document.createElement("div");
    right.appendChild(d1);
    var h1=document.createElement("h1");
    h1.textContent="PERSONAL DETAILS:";
    d1.appendChild(h1);
    // d1.appendChild(document.createElement("HR"));

    // var h4=document.createElement('h4');
    // h4.textContent="Programming Languages :";
    // h4.textContent= t.Programminglanguages
    // d1.appendChild(h4);
   for(i in ped){
    var ul = document.createElement("ul");
    ul.classList.add("ul");
    var li =document.createElement("li");
    li.textContent = "Date of Birth  :"+ped[i].pd1;
    ul.appendChild(li);
    right.appendChild(ul);
    var li =document.createElement("li");
    li.textContent = "Gender :"+ped[i].pd2;
    ul.appendChild(li);
    right.appendChild(ul);
    var li =document.createElement("li");
    li.textContent = "Nationality  :"+ped[i].pd3;
    ul.appendChild(li);
    right.appendChild(ul);
    var li =document.createElement("li");
    li.textContent = "Address :"+ped[i].pd4;
    ul.appendChild(li);
    right.appendChild(ul);
    var li =document.createElement("li");
    li.textContent = "Hobbies :"+ped[i].pd5;
    ul.appendChild(li);
    right.appendChild(ul);
    var li =document.createElement("li");
    li.textContent = "Languages known :"+ped[i].pd6;
    ul.appendChild(li);
    right.appendChild(ul);
    d1.appendChild(ul);
   }   
}
function decl(de){
    var d1 = document.createElement("div");
    right.appendChild(d1);
    var h1=document.createElement("h1");
    h1.textContent="Declaration:";
    d1.appendChild(h1);
    // d1.appendChild(document.createElement("HR"));

    // var ul = document.createElement("ul");
    // ul.classList.add("ds");
    // var li =document.createElement("li");
    // li.textContent = de[i].val;
    // ul.appendChild(li);
    // right.appendChild(ul);
    // var li =document.createElement("li");
    // li.textContent = de[i].sign;
    // ul.appendChild(li);
    // right.appendChild(ul);
    // d1.appendChild(ul);

    // var va=document.createElement(h3);
    // va.textContent=de[i].val;
    // right.appendChild(va);

    // var sig=document.createElement(h3);
    // sig.textContent=de[i].sign;
    // right.appendChild(sig);
    // d1.appendChild(va);
    // d1.appendChild(sig);


     h1.appendChild(document.createElement("HR"));
     var p = document.createElement("p");
     p.classList.add("ds");
     p.textContent=de.val;
     d1.appendChild(p);
     var br=document.createElement('br'); 
     d1.appendChild(br);
     var p = document.createElement("p");
     p.classList.add("p");
     p.textContent=de.sign;
     d1.appendChild(p);
     right.appendChild(d2)
   }   