//Main margin
var margin = document.createElement('div');
margin.setAttribute('class', 'margin');
document.body.append(margin);

//Flex 
var flex = document.createElement('div');
flex.setAttribute('class', 'columns');
document.body.append(flex);

margin.append(flex);

//flex col1
var col1 = document.createElement('div');
col1.setAttribute('class', 'column1');
col1.setAttribute('id', 'column1')
document.body.append(col1);

flex.append(col1);

var form = document.createElement('form');
form.setAttribute('id', 'myform')
document.body.append(form);


//heading
var h1 = document.createElement('h1');
h1.innerHTML = "Form Submission";
document.body.append(h1);

//fname
//label
var fnamelabel = document.createElement('label');
fnamelabel.setAttribute('for', 'fname');
fnamelabel.innerHTML = "First Name:";
document.body.append(fnamelabel);
//textbox
var fnametext = document.createElement('input');
fnametext.setAttribute('type', 'text');
fnametext.setAttribute('id', 'fname');
fnametext.setAttribute('placeholder', 'First Name');
document.body.append(fnametext);

//lname
//label
var lnamelabel = document.createElement('label');
lnamelabel.setAttribute('for', 'lname');
lnamelabel.innerHTML = "Last Name:";
document.body.append(lnamelabel);
//textbox
var lnametext = document.createElement('input');
lnametext.setAttribute('type', 'text');
lnametext.setAttribute('id', 'lname');
lnametext.setAttribute('placeholder', 'Last Name');
document.body.append(lnametext);

//address1
//label
var addlabel1 = document.createElement('label');
addlabel1.setAttribute('for', 'text');
addlabel1.innerHTML = "Address:";
document.body.append(addlabel1);
//textbox
var addtext1 = document.createElement('input');
addtext1.setAttribute('type', 'text');
addtext1.setAttribute('id', 'add1');
addtext1.setAttribute('placeholder', 'Address');
document.body.append(addtext1);

//PIN
//label
var pinlabel = document.createElement('label');
pinlabel.setAttribute('for', 'lname');
pinlabel.innerHTML = "PIN:";
document.body.append(pinlabel);
//textbox
var pintext = document.createElement('input');
pintext.setAttribute('type', 'text');
pintext.setAttribute('id', 'pin');
pintext.setAttribute('placeholder', 'PIN');
document.body.append(pintext);

//gender
//label
var genderlabel = document.createElement('label');
genderlabel.setAttribute('for', 'text');
genderlabel.innerHTML = "Gender:";
document.body.append(genderlabel);
//radio1
var genderradio1 = document.createElement('input');
genderradio1.setAttribute('name', 'gender');
genderradio1.setAttribute('type', 'radio');
genderradio1.setAttribute('id', 'gender');
genderradio1.setAttribute('value', 'Male');
document.body.append(genderradio1);
//radiolabel1
var radiolabel1 = document.createElement('label');
radiolabel1.setAttribute('class', 'display1');
radiolabel1.setAttribute('for', 'text');
radiolabel1.innerHTML = "Male";
document.body.append(radiolabel1);
//radio2
var genderradio2 = document.createElement('input');
genderradio2.setAttribute('name', 'gender');
genderradio2.setAttribute('type', 'radio');
genderradio2.setAttribute('id', 'gender');
genderradio2.setAttribute('id', 'gender1');
genderradio2.setAttribute('value', 'Female');
document.body.append(genderradio2);
//radiolabel2
var radiolabel2 = document.createElement('label');
radiolabel2.setAttribute('class', 'display1');
radiolabel2.setAttribute('for', 'text');
radiolabel2.innerHTML = "Female";
document.body.append(radiolabel2);

//food
var foodlabel = document.createElement('label')
foodlabel.setAttribute('for', 'text');
foodlabel.innerHTML = "Choice of Food: <span>(must choose atleast 2 out of four options)</span>";
document.body.append(foodlabel)
//checkbox1
var checkbox1 = document.createElement('input');
checkbox1.setAttribute('type', 'checkbox');
checkbox1.setAttribute('name', 'food');
checkbox1.setAttribute('value', 'South Indian');

checkbox1.setAttribute('id', 'food');
document.body.append(checkbox1);
//foodlabel1
var foodlabel1 = document.createElement('label');
foodlabel1.setAttribute('for', 'text');
foodlabel1.setAttribute('class', 'display2');
foodlabel1.setAttribute('name', 'food');
foodlabel1.innerHTML = "South Indian<br>";
document.body.append(foodlabel1);
//checkbox2
var checkbox2 = document.createElement('input');
checkbox2.setAttribute('type', 'checkbox');
checkbox2.setAttribute('name', 'food');
checkbox2.setAttribute('value', 'North Indian');
checkbox2.setAttribute('id', 'food');
document.body.append(checkbox2);
//foodlabel2
var foodlabel2 = document.createElement('label');
foodlabel2.setAttribute('for', 'text');
foodlabel2.setAttribute('class', 'display2');
foodlabel2.setAttribute('name', 'food');
foodlabel2.innerHTML = "North Indian<br>";
document.body.append(foodlabel2);
//checkbox3
var checkbox3 = document.createElement('input');
checkbox3.setAttribute('type', 'checkbox');
checkbox3.setAttribute('name', 'food');
checkbox3.setAttribute('value', 'Chinese');
checkbox3.setAttribute('id', 'food');
document.body.append(checkbox3);
//foodlabel3
var foodlabel3 = document.createElement('label');
foodlabel3.setAttribute('for', 'text');
foodlabel3.setAttribute('class', 'display2');
foodlabel3.setAttribute('name', 'food');
foodlabel3.innerHTML = "Chinese<br>";
document.body.append(foodlabel3);
//checkbox4
var checkbox4 = document.createElement('input');
checkbox4.setAttribute('type', 'checkbox');
checkbox4.setAttribute('name', 'food');
checkbox4.setAttribute('id', 'food');
checkbox4.setAttribute('value', 'Chinese');
document.body.append(checkbox4);
//foodlabel4
var foodlabel4 = document.createElement('label');
foodlabel4.setAttribute('for', 'text');
foodlabel4.setAttribute('class', 'display2');
foodlabel4.setAttribute('name', 'food');
foodlabel4.innerHTML = "Japanese<br>";
document.body.append(foodlabel4);
//checkbox5
var checkbox5 = document.createElement('input');
checkbox5.setAttribute('type', 'checkbox');
checkbox5.setAttribute('name', 'food');
checkbox5.setAttribute('value', 'Sea Food');
checkbox5.setAttribute('id', 'food');
document.body.append(checkbox5);
//foodlabel5
var foodlabel5 = document.createElement('label');
foodlabel5.setAttribute('for', 'text');
foodlabel5.setAttribute('class', 'display2');
foodlabel5.setAttribute('name', 'food');
foodlabel5.innerHTML = "Sea Food";
document.body.append(foodlabel5);

//state
//label
var statelabel = document.createElement('label');
statelabel.setAttribute('for', 'state');
statelabel.innerHTML = "State:";
document.body.append(statelabel);
//textbox
var statetext = document.createElement('input');
statetext.setAttribute('type', 'text');
statetext.setAttribute('id', 'state');
statetext.setAttribute('placeholder', 'State');
document.body.append(statetext);

//country
//label
var countrylabel = document.createElement('label');
countrylabel.setAttribute('for', 'country');
countrylabel.innerHTML = "Country:";
document.body.append(countrylabel);
//textbox
var countrytext = document.createElement('input');
countrytext.setAttribute('type', 'text');
countrytext.setAttribute('id', 'country');
countrytext.setAttribute('placeholder', 'Country');

document.body.append(countrytext);

//button
var submit = document.createElement('input');
submit.setAttribute('for', 'button');
submit.setAttribute('value', 'Submit')
submit.setAttribute('class', 'btn btn-secondary');
submit.setAttribute('onclick', 'btn();');
document.body.append(submit);


form.append(h1, fnamelabel, fnametext, lnamelabel, lnametext, addlabel1, addtext1, pinlabel,
    pintext, genderlabel, genderradio1, radiolabel1, genderradio2, radiolabel2, foodlabel,
    checkbox1, foodlabel1, checkbox2, foodlabel2, checkbox3, foodlabel3, checkbox4, foodlabel4, checkbox5, foodlabel5,
    statelabel, statetext, countrylabel, countrytext, submit);
col1.append(form);

//flex col2
var col2 = document.createElement('div');
col2.setAttribute('class', 'column2');
document.body.append(col2);

flex.append(col2);

//heading
var h11 = document.createElement('h1');
h11.innerHTML = "Temporary Database";
document.body.append(h11);

//table
var table = document.createElement('table');
table.setAttribute('class', 'table');
table.setAttribute('id', 'mytable');
document.body.append(table);


var thead = document.createElement('thead');
thead.setAttribute('class', 'thead-dark');

var tr = document.createElement('tr');
var th1 = createtrth('th', 'Firstname');
var th2 = createtrth('th', 'Lastname');
var th3 = createtrth('th', 'Address');
var th4 = createtrth('th', 'Pincode');
var th5 = createtrth('th', 'Gender');
var th6 = createtrth('th', 'Food');
var th7 = createtrth('th', 'State');
var th8 = createtrth('th', 'Country');

tr.append(th1, th2, th3, th4, th5, th6, th7, th8);
thead.append(tr);
table.append(thead);

col2.append(h11, table);

function createtrth(elementname, value) {
    //ele=th
    //<th>firstname<th>
    var ele = document.createElement(elementname);
    //value="firstname"
    ele.innerHTML = value;
    return ele;
}

///
var rcount = 0;
function btn() {
    var tab = document.getElementById("mytable");
    var arr = document.querySelectorAll("input[type=checkbox]")
    var r = [];
    var count = 0;
//checkbox checks
    for (i = 0; i < arr.length; i++) {
        if (arr[i].checked == true) {
            r.push(arr[i].value);
            count++;
        }
    }
//table insert
    if (count >= 2) {
        var row = tab.insertRow();

        var c1 = row.insertCell(0);
        var c2 = row.insertCell(1);
        var c3 = row.insertCell(2);
        var c4 = row.insertCell(3);
        var c5 = row.insertCell(4);
        var c6 = row.insertCell(5);
        var c7 = row.insertCell(6);
        var c8 = row.insertCell(7);
        c6.innerHTML = r.join(", ");
    }
    else {
        //food items atleast two
        alert("Select atleast two food");
        return false;
    }

    c1.innerText = document.getElementById("fname").value;
    c2.innerText = document.getElementById("lname").value;
    c3.innerText = document.getElementById("add1").value;
    c4.innerText = document.getElementById("pin").value;
    c5.innerText = document.getElementById("gender").value;
    c7.innerText = document.getElementById("state").value;
    c8.innerText = document.getElementById("country").value;

    // form reset  
        var formreset=document.getElementById("myform");
        formreset.reset();
    


}