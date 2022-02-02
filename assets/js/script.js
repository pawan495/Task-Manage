var taskObj={
    key:"projects",
    addProject: function(){
        // if project id selected
if( document.getElementById("add-project").value ==""){
    swal("Please enter project name");
    return false;
}
//initialize local storage
var option="";
if(localStorage.getItem(this.key) == null){
    localStorage.setItem(this.key,"[]");
}
var data = json.parse(localStorage.getItem(this.key));

var project={
    id: data.length,
    name: document.getElementById("add-project").value,
    tasks:[]
};
// project push in local Storage
data.push(project);
localStorage.setItem(this.key, json.stringify(data));

this.loadAllProjects();
this.showAllProjects();

    },
};
addTask: 
   function task (task){
    var project= form.project.value;
    var task=form.task.value;

    var projects= this. getAllProjects();
    var task = form.task.value;
    var projects= this.getAllProjects();
    for (var a=0; a< projects.length; a++){
        if (projects[a].id == project){
            var taskObj={
                id: projetcs[a].tasks.length,
                name: task,
                status: "Progress",// progress, Completed
                isStarted: false,
                logs:[],
                started: this.getCurrentTimeInTaskStartEndFormat(),
                ended:""
            }
            projects[a].tasks.push(taskObj);
            break;
        }
    }

    //update localStorage
localStorage.detItem(this.key,json.stringify(projects));
jQuery("#addTaskModal").modal("hide");
jQuery9(".modal-backdrop").remove();
this.showAllTasks();
return false;

}