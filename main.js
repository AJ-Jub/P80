names_of_people = [];

function submit() {
    var GuestName = document.getElementById("name1").value;
    names_of_people.push(GuestName);

    document.getElementById("display_name").innerHTML = names_of_people;
    document.getElementById("submit_button").style.display = "stay";
}

function show(){
 
    document.getElementById("show_names").innerHTML = names_of_people;
    document.getElementById("show_button").style.display = "stay";
}

function sorting(){
    names_of_people.sort()
    console.log(names_of_people);
   document.getElementById("sorted_list").innerHTML = names_of_people;
}

function search(){
    var s= document.getElementById("search_bar").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people.length; j++)
    {
        if(s==names_of_people[j]){
            found=found+1;
        
        }
    }
    document.getElementById("search_display").innerHTML="name found "+found+" time/s";
    console.log("found name "+found+" time/s");
}