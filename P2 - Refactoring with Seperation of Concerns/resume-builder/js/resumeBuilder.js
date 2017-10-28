(function(){    
    let data =  {
        userDetails : 
        {
            "header": 
            {                    
                "headerName": "Richard Hendricks",
                "headerRole": "Front End Engineer",                
                "bioPic": "images/fry.jpg",
                "welcomeMsg": "Dev for a reason",
                "skills" : ["algorithm design","leadership","UI-UX"]
            },
            "contacts":
            {
                "contactGeneric": "",
                "mobile": "123456789",
                "email": "richard@hooli.com",
                "github": "richards",
                "twitter": "",
                "blog": "",
                "location": "Palo Alto, Sillicon Valley",
            },
            "works":
            [
                {
                    "workEmployer": "Hooli",
                    "workTitle": "Front End Dev",
                    "workDates": "January 2012 - Present",                    
                    "workLocation": "Dubai",
                    "workDescription": "Had a great time changing the world, making it a better place"
                },
                {
                    "workEmployer": "Facebook",
                    "workTitle": "Software Engineer",
                    "workDates": "January 2010 - December 2012",                    
                    "workLocation": "New York",
                    "workDescription": "helped in connecting the world, bringing it closer than ever"
                }
            ],
            "projects":
            [
                {
                    "projectTitle": "Hooli Maps",
                    "projectDates": "Auguest 2012 - Present",                    
                    "projectDescription": "Working on the integration of maps into mobile devices",
                    "projectImage": "images/197x148.gif",
                    // "projectImage2": "images/197x148.gif",                    
                },
                {
                    "projectTitle": "Music Copyrights Search",
                    "projectDates": "February 2010 - July 2011",                    
                    "projectDescription": "Find out whether a music is copyright protected or not",
                    "projectImage": "images/197x148.gif",
                    //"projectImage2": "images/197x148.gif",                   
                }                    
            ],
            "schools":
            [
                {
                    "name": "Had",
                    "degree": "Bachelor of Technology",
                    "startDate": "February 2008",
                    "endDate": "July 2010",
                    "location": "San Fransisco",
                    "major": "Computer Science"
                }
            ],
            "onlineClasses":
            [
                {
                    "title": "JavaScript Advanced",
                    "platform": "MIT OS",
                    "startDate": "February 2009",
                    "endDate": "July 2011",
                    "url": "https://www.mit.com"
                }
            ]
        },            // end of userDetails object        

        templates : 
        {
            "HTMLheaderName": '<h1 id="name">%data%</h1>',
            "HTMLheaderRole": '<span>%data%</span><hr>',            
            "HTMLcontactGeneric": '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>',
            "HTMLmobile": '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>',
            "HTMLemail": '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>',
            "HTMLtwitter": '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>',
            "HTMLgithub": '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>',
            "HTMLblog": '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>',
            "HTMLlocation": '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>',
                
            "HTMLbioPic": '<img src="images/fry.jpg" class="biopic">',
            "HTMLwelcomeMsg": '<span class="welcome-message">%data%</span>',
                
            "HTMLskillsStart": '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>',
            "HTMLskills": '<li class="flex-item"><span class="white-text">%data%</span></li>',
                
            "HTMLworkStart": '<div class="work-entry"></div>',
            "HTMLworkEmployer": '<a href="#">%data%</a>',
            "HTMLworkTitle": ' <div class="date-text">%data%</div><br/>',
            "HTMLworkDates": '<div class="date-text">%data%</div>',
            "HTMLworkLocation": '<div class="location-text">%data%</div>',
            "HTMLworkDescription": '<p><br>%data%</p>',
                
            "HTMLprojectStart": '<div class="project-entry"></div>',
            "HTMLprojectTitle": '<a href="#">%data%</a>',
            "HTMLprojectDates": '<div class="date-text">%data%</div>',
            "HTMLprojectDescription": '<p><br>%data%</p>',
            "HTMLprojectImage": '<img src="%data%">',
            //"HTMLprojectImage2": '<img src="%data%">',
                
            "HTMLschoolStart": '<div class="education-entry"></div>',
            "HTMLschoolName": '<a href="#">%data%',
            "HTMLschoolDegree": ' -- %data%</a>',
            "HTMLschoolDates": '<div class="date-text">%data%</div>',
            "HTMLschoolLocation": '<div class="location-text">%data%</div>',
            "HTMLschoolMajor": '<em><br>Major: %data%</em>',
                
            "HTMLonlineClasses": '<h3>Online Classes</h3>',
            "HTMLonlineTitle": '<a href="#">%data%',
            "HTMLonlineSchool": ' - %data%</a>',
            "HTMLonlineDates": '<div class="date-text">%data%</div>',
            "HTMLonlineURL": '<br><a href="#">%data%</a>',
                
            "internationalizeButton": '<button>Internationalize</button>',
            "googleMap": '<div id="map"></div>',            
        }



    };

    let octopus = {
        init(){
            view.init();
        },
        getTemplates(){
            return data.templates;
        },
        getUserDetails(){
            return data.userDetails;
        },
        replaceData(source, str, changeTo, prepend){
            let formatted = str.replace("%data%", changeTo);
            if(prepend === false) source.append(formatted);
            else source.prepend(formatted);
        }

    };

    let view = {
        init(){
            this.details = octopus.getUserDetails();
            this.templates = octopus.getTemplates();
            this.headerInit();
            this.workInit();
            this.projectInit();
        },
        headerInit(){          
            let $header = $("#header");                                
            let topContacts = $("#topContacts");
            let self = this;
                                   
            octopus.replaceData($header, self.templates["HTMLheaderRole"], self.details.header["headerRole"], true);                    
            octopus.replaceData($header, self.templates["HTMLheaderName"], self.details.header["headerName"], true);                                
            
            // ** key = bioPic & ele = images.fry.jpg **
            $.each(this.details.contacts, function(key, ele){
                if(ele){
                    octopus.replaceData(topContacts, self.templates["HTML"+key], ele);                    
                }
            });
            
            let i = 0; // simple counter
            $.each(this.details.header, function(key, ele){                                
                i++;
                if(i <= 2) return true; // skip first two ele - true here means continue
                if(ele.constructor === Array){ // if it's an array of skills - loop over it
                    $header.append(self.templates.HTMLskillsStart);
                    let $skills = $("#skills");
                    ele.forEach(function(e){
                        octopus.replaceData($skills, self.templates["HTML"+key], e, false);
                    });                    
                    return true;
                }
                if(ele){  // else
                    octopus.replaceData($header, self.templates["HTML"+key], ele, false);                                                            
                }
                
            });            
        },
        workInit(){
            let $work = $("#workExperience");
            let self = this;
            $work.append(this.templates.HTMLworkStart);
            $work = $(".work-entry");
            console.log($work);
            this.details.works.forEach(function(work){
                $.each(work, function(key, value){                    
                    octopus.replaceData($work, self.templates["HTML"+key], value, false);
                });
            });
            
        },
        projectInit(){
            let $project = $("#projects");
            let self = this;
            $project.append(this.templates.HTMLprojectStart);
            $project = $(".project-entry");            
            this.details.projects.forEach(function(project){
                $.each(project, function(key, value){                    
                    octopus.replaceData($project, self.templates["HTML"+key], value, false);
                });
            });
            
        },
        initMap(){
          //  $("#mapDiv").append(this.templates.googleMap);
          
        }
    };

    octopus.init();
}());