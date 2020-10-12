document.getElementById('button1').addEventListener('click', loadTeacher);
document.getElementById('button2').addEventListener('click', loadStudents);

//to get teacher info
function loadTeacher(e){
  const xhr=new XMLHttpRequest();

  xhr.open('GET','teacher.json',true);

  xhr.onload=function(){
    if(this.status===200){

      const teacher=JSON.parse(this.responseText);

      const output=`
    <ul>
      <li><b>Name:</b> ${teacher.name}</li>
      <li><b>Department:</b> ${teacher.department}</li>
      <li><b>ID:</b> ${teacher.id}</li>
      <li><b>Subject:</b> ${teacher.subject}</li>
    </ul>`;
    document.getElementById('teacher').innerHTML=output;
    }
  }
  xhr.send();
}

//to get students info
function loadStudents(e){
  const xhr=new XMLHttpRequest();

  xhr.open('GET','students.json',true);

  xhr.onload=function(){
    if(this.status===200){

      const students=JSON.parse(this.responseText);

      let output='';
      students.forEach(function(teacher){

       output +=`
    <ul>
      <li><b>Name:</b> ${teacher.Name}</li>
      <li><b>Department:</b> ${teacher.Department}</li>
      <li><b>ID: </b> ${teacher.ID}</li>
      <li><b>Percentage:</b> ${teacher.Percentage}</li>
    </ul>`;
      });
    document.getElementById('students').innerHTML=output;
    }
  }
  xhr.send();
}

