/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

var students = document.getElementsByClassName("student-item cf");    // selects all the students in the list

  const showPage = (page) => {
    for(i=0;i<students.length;i+=1){
      students[i].style.display = "none";                            // hides all student list elements
    }
    var startIndex = (page * 10) - 10;                              // gets the starting index of the students on the specified page
    var endIndex = page * 10 - 1;                                  // gets the final index of the students on the specified page
    for(i=startIndex;i<=endIndex;i+=1){
      students[i].style.display = "block";                         // displays the students on the specified page
    }
  }

  const appendPageLinks = (list) => {
    var listLength = Math.ceil(list.length / 10);                 // gets the amount of pages needed for the specified student list
    var mainDiv = document.getElementsByClassName("page");        // gets the main div that we will put our new div on
    var div = document.createElement("DIV");                     // put our new div on the main div
    div.className = "pagination";                                // gives this new div the class 'pagination'
    var ul = document.createElement("UL");                       // put a ul element on our new div
    for(i=1;i<=listLength;i+=1){
      var a = document.createElement("A");
      ul.appendChild(a);
      a.href = "#";
      a.innerHTML = i;
    }
    div.appendChild(ul);
    mainDiv[0].appendChild(div);                                  // puts the specified amount of li elements needed with accompanying a tags
    var a = document.querySelectorAll("a[href='#']");            // selects the anchors of all li tags b/c you cant use the same variable inside of the function because of its scope
    a[0].className = "active";                                 // gives the class of active to the first anchor tag
    for(i=0;i<listLength;i+=1){
      a[i].addEventListener('click', ()=>{
        var active = document.getElementsByClassName("active");
        active[0].classList.remove("active");                                        // gets rid of all exisiting active tags on the anchors
        this.className = "active";  Math.ceil()              // gives the class of active to the anchor that was clicked
        showPage(this.innerHTML);                            // shows the page of the anchor tag clicked with the correct page #
      });
    }
  }

showPage(1);                                                   // shows the first page of students
appendPageLinks(students);                                     // adds page links and functionality
