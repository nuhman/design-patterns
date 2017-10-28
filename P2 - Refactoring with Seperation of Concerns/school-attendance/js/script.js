(function(){

    let model = {
        numOfCols : 14,        
        headings : ["Student Name", "1", "2", "3", "4", 
                    "5", "6", "7", "8", "9", "10", "11", "12", "Days Missed"],
        students : [ {"name" : "Ahmad", "attendance" : [], count: 0, id : "0" },
                     {"name" : "Fayiz", "attendance" : [], count: 0, id : "1"},
                     {"name" : "Ramees", "attendance" : [], count: 0, id : "2"},
                     {"name" : "Ryan", "attendance" : [], count: 0, id: "3" },
                     {"name" : "Richie", "attendance" : [], count: 0, id : "4" } ]        
    };

    let octopus = {
        init(){
            this.initAttendance();            
            view.init();            
        },
        getCols(){
            return model.numOfCols;
        },
        getHeading(){
            return model.headings;
        },
        getStudents(){
            return model.students;
        },
        randomBool(){
            return (Math.random() >= 0.5);
        },
        fillBool(days, entry){
            let count = 0;
            for(let i=0; i< days; i++) {
                let val = this.randomBool();                
                entry.push(val);
                if(val) count++;
            }            
            return count;
        },
        initAttendance(){
          let days = this.getCols() - 2;
          let students = this.getStudents();
          let self = this;          
          students.forEach(function(student){            
             let count = self.fillBool(days, student.attendance);
             student.count = count;
          });                    
        },        
        fillAttendance(){
            this.initAttendance();            
        },         
        updateAttendance(id){
            let students = this.getStudents();            
            let inputs = $('.'+id);            
            let count = 0;
            students[id].attendance.forEach(function(attValue, index){
                if(inputs[index].checked){
                    students[id].attendance[index] = true;                   
                    count++;
                }                    
                else 
                    students[id].attendance[index] = false;                
            });
            students[id].count = count;
            view.bodyRender(); // possible bottleneck  
        }
    };


    let view = {

        init(){
            this.renderHeader();
            this.bodyRender();
        },
        renderHeader(){
            
            let headings = octopus.getHeading();

            $('thead').append('<tr>');
            
            let htmlStr = '';
            
            headings.forEach(function(head, index){
                if( index === 0 ){
                    htmlStr = '<th class="name-col" >'+head+'</th>';
                } else if( index === (headings.length - 1) ){
                    htmlStr = '<th class="missed-col" >'+head+'</th>';
                } else{
                    htmlStr = '<th>'+head+'</th>';
                }
                $('thead').append(htmlStr);
            });   
            
            $('thead').append('</tr>');
        },
        bodyRender(){
            let students = octopus.getStudents();
            let colNum = octopus.getCols();
            $('tbody').html('');
            students.forEach(function(student, index){
                $('tbody').append('<tr class="student">');
                for(let i=0;i<colNum;i++){
                    if(i === 0){
                        $('tbody').append('<td class="name-col">'+student.name+'</td>');
                    } else if(i === (colNum - 1)){                        
                        $('tbody').append('<td class="missed-col">'+student.count+'</td>');
                    } else{
                        if(student.attendance[i-1]){
                            $('tbody').append('<td class="attend-col"><input type="checkbox" checked class="'+student.id+'"></td>');
                        } else{
                            $('tbody').append('<td class="attend-col"><input type="checkbox" class="'+student.id+'"></td>');
                        }                     
                    }
                } 
                $('tbody').append('</tr>');                
            });
            // add event listener to checkboxes
            $('td input').click(function(){                                
                octopus.updateAttendance( $(this)[0].className );
            });
        }    

    };   
    
    // start application
    octopus.init();

})();