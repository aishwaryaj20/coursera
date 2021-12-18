var search=JSON.parse(localStorage.getItem("coursera_search"));


// async function showlist(search){
//     // localStorage.removeItem("coursera_search")
//     // let res = await fetch(`https://api.coursera.org/api/courses.v1?q=search&query=${search}&includes=instructorIds,photoUrl,description,largeIcon&fields=instructorIds,photoUrl,description,partnerLogo,certificates,startDate,workload,specializations,domainTypes`)
//     let res=await fetch(`https://course-era-web11.herokuapp.com/courses/`)
//     console.log(res)
//     let data =await res.json();
//     console.log("dharmesh",data);
//     localStorage.setItem("productData", JSON.stringify(data));
    
//     displaydata(res)
// }
// // showlist()
fetch(`https://course-era-web11.herokuapp.com/courses/`)
.then(function(res){
    
    return res.json();           
}).then(function (res){
    localStorage.setItem("productData", JSON.stringify(res));
    console.log("dharmesh",res.data[0])
     displaydata(res.data);
    })
// showlist(search)
let parent=document.getElementById("displaydiv")

function displaydata(data){
    console.log("showdata",data)
    for(var d=0;d<data.length;d++){
        let maindiv=document.createElement("div")
        let imgdiv=document.createElement("div")
        let descdiv=document.createElement("div")

        let img=document.createElement("img")
        img.src=data[d].img
        imgdiv.append(img)
        //description

        let title=document.createElement("p")
        let instructor=document.createElement("p")
        let type=document.createElement("p")
        let studenttotal=document.createElement("p")
        let studenttype=document.createElement("p")
        // type.style.backgroundColor="lightgray";
        type.style.width="100px";
        title.innerText=data[d].coursename;
        instructor.innerText=data[d].institute;

        // let len=el.certificates.length;
        // if(len==0 || len == 1){
        type.innerText=data[d].category
        // }else if(len==2){
        //     type.innerText="Specialization";
        // }

        function getRandomNumberBetween(min,max){
            return Math.floor(Math.random()*(max-min+1)+min);
        }
        let num=getRandomNumberBetween(200,998)
        studenttotal.innerText=data[d].student_enroll
        studenttotal.innerHTML=`<div><i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;| ${data[d].student_enroll}Students</div>`

        var randNo = Math.floor(Math.random() * 3) + 1
        if (randNo==0 || randNo==1){
           var st="Beginner";
        }else if(randNo==2){
            var st="Intermediate";
        }else if(randNo==3){
            var st="Advanced";
        }
        studenttype.innerText=st
        let hr=document.createElement("hr")
        descdiv.append(title,instructor,type,studenttotal,studenttype)
        maindiv.append(imgdiv,descdiv)
        maindiv.onclick=function(){
            alert("go to desc page")
            document.location.href=`/products/courseDescription?coursename=${data[d].coursename}&institute=${data[d].institute}&type=${data[d].type}&img=${data[d].img}&category=${data[d].category}&duration=${data[d].duration}&duration1=${data[d].duration1}`;
        }
        parent.append(maindiv,hr)
    }

    }
    // let data1 = JSON.parse(localStorage.getItem("productData"));
//     data.forEach(function (el) {
//         let maindiv=document.createElement("div")
//         let imgdiv=document.createElement("div")
//         let descdiv=document.createElement("div")

//         let img=document.createElement("img")
//         img.src=el.photoUrl
//         imgdiv.append(img)
//         //description

//         let title=document.createElement("p")
//         let instructor=document.createElement("p")
//         let type=document.createElement("p")
//         let studenttotal=document.createElement("p")
//         let studenttype=document.createElement("p")
//         // type.style.backgroundColor="lightgray";
//         type.style.width="100px";
//         title.innerText=el.name;
//         instructor.innerText=el.domainTypes[0].domainId;

//         let len=el.certificates.length;
//         if(len==0 || len == 1){
//             type.innerText="Certification";
//         }else if(len==2){
//             type.innerText="Specialization";
//         }

//         function getRandomNumberBetween(min,max){
//             return Math.floor(Math.random()*(max-min+1)+min);
//         }
//         let num=getRandomNumberBetween(200,998)

//         studenttotal.innerHTML=`<div><i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;| ${num} k Students</div>`

//         var randNo = Math.floor(Math.random() * 3) + 1
//         if (randNo==0 || randNo==1){
//            var st="Beginner";
//         }else if(randNo==2){
//             var st="Intermediate";
//         }else if(randNo==3){
//             var st="Advanced";
//         }
//         studenttype.innerText=st
//         let hr=document.createElement("hr")
//         descdiv.append(title,instructor,type,studenttotal,studenttype)
//         maindiv.append(imgdiv,descdiv)
//         maindiv.onclick=function(){
//             alert("go to desc page")
//             document.location.href="courseDescription.html";
//         }
//         parent.append(maindiv,hr)
//     })
// }

function empty(){
    let box=document.getElementById("displaydiv")
    box.innerHTML=null;
}

async function lang_select(){
    empty()
    let lang_form=document.getElementById("formid1")
    let  lang_name=lang_form.languages[lang_form.languages.selectedIndex].text
    let data = JSON.parse(localStorage.getItem("productData"));
    show_server_data(data.data,lang_name)
    
}


function show_server_data(data,lang_name){
    console.log("server",data)
     empty()
        
        for(var d=0;d<data.length;d++){
                if(data[d].Language1==lang_name){
                let maindiv=document.createElement("div")
                let imgdiv=document.createElement("div")
                let descdiv=document.createElement("div")
        
                let img=document.createElement("img")
                img.src=data[d].img
                imgdiv.append(img)
                //description
        
                let title=document.createElement("p")
                let instructor=document.createElement("p")
                let type=document.createElement("p")
                let studenttotal=document.createElement("p")
                let studenttype=document.createElement("p")
                // type.style.backgroundColor="lightgray";
                type.style.width="100px";
                title.innerText=data[d].coursename;
                instructor.innerText=data[d].institute;
        
                // let len=el.certificates.length;
                // if(len==0 || len == 1){
                type.innerText=data[d].category
                // }else if(len==2){
                //     type.innerText="Specialization";
                // }
        
                function getRandomNumberBetween(min,max){
                    return Math.floor(Math.random()*(max-min+1)+min);
                }
                let num=getRandomNumberBetween(200,998)
                studenttotal.innerText=data[d].student_enroll
                studenttotal.innerHTML=`<div><i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;| ${data[d].student_enroll}Students</div>`
        
                var randNo = Math.floor(Math.random() * 3) + 1
                if (randNo==0 || randNo==1){
                   var st="Beginner";
                }else if(randNo==2){
                    var st="Intermediate";
                }else if(randNo==3){
                    var st="Advanced";
                }
                studenttype.innerText=st
                let hr=document.createElement("hr")
                descdiv.append(title,instructor,type,studenttotal,studenttype)
                maindiv.append(imgdiv,descdiv)
                maindiv.onclick=function(){
                    alert("go to desc page")
                    document.location.href="courseDescription.html";
                }
                parent.append(maindiv,hr)
            }
}
}
 
// https://api.coursera.org/api/courses.v1?q=search&query=${search}&index=prod_all_launched_products_term_optimization&allLanguages=english&includes=instructorIds,photoUrl,description,largeIcon&fields=instructorIds,photoUrl,description,partnerLogo,certificates,startDate,workload,specializations,domainTypes
// &productDifficultyLevel=Beginner
// &entityTypeDescription=Courses => learning products


async function level_select(){
    empty()
    let lang_form=document.getElementById("formid2")
    let  level_name=lang_form.level[lang_form.level.selectedIndex].text
    let data = JSON.parse(localStorage.getItem("productData"));
    
    show_server_data_level(data.data,level_name)
   
}

function  show_server_data_level(data,level_name){
        empty()
        for(var d=0;d<data.length;d++){
            if(data[d].level==level_name){
            let maindiv=document.createElement("div")
            let imgdiv=document.createElement("div")
            let descdiv=document.createElement("div")
    
            let img=document.createElement("img")
            img.src=data[d].img
            imgdiv.append(img)
            //description
    
            let title=document.createElement("p")
            let instructor=document.createElement("p")
            let type=document.createElement("p")
            let studenttotal=document.createElement("p")
            let studenttype=document.createElement("p")
            // type.style.backgroundColor="lightgray";
            type.style.width="100px";
            title.innerText=data[d].coursename;
            instructor.innerText=data[d].institute;
    
            // let len=el.certificates.length;
            // if(len==0 || len == 1){
            type.innerText=data[d].category
            // }else if(len==2){
            //     type.innerText="Specialization";
            // }
    
            function getRandomNumberBetween(min,max){
                return Math.floor(Math.random()*(max-min+1)+min);
            }
            let num=getRandomNumberBetween(200,998)
            studenttotal.innerText=data[d].student_enroll
            studenttotal.innerHTML=`<div><i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;| ${data[d].student_enroll}Students</div>`
    
            // var randNo = Math.floor(Math.random() * 3) + 1
            // if (randNo==0 || randNo==1){
            //    var st="Beginner";
            // }else if(randNo==2){
            //     var st="Intermediate";
            // }else if(randNo==3){
            //     var st="Advanced";
            // }
            studenttype.innerText=data[d].level
            let hr=document.createElement("hr")
            descdiv.append(title,instructor,type,studenttotal,studenttype)
            maindiv.append(imgdiv,descdiv)
            maindiv.onclick=function(){
                alert("go to desc page")
                document.location.href="courseDescription.html";
            }
            parent.append(maindiv,hr)
        }
}
}

async function duration_select(){
    empty()
    let lang_form=document.getElementById("formid3")
    let  duration_name=lang_form.duration[lang_form.duration.selectedIndex].value
    let data = JSON.parse(localStorage.getItem("productData"));
    
    show_server_data_duration(data.data,duration_name)
   
}

function show_server_data_duration(data,duration_name){
    empty()
       
        for(var d=0;d<data.length;d++){
            if(data[d].duration1==duration_name && data[d].Language1=="English"){
            let maindiv=document.createElement("div")
            let imgdiv=document.createElement("div")
            let descdiv=document.createElement("div")
    
            let img=document.createElement("img")
            img.src=data[d].img
            imgdiv.append(img)
            //description
    
            let title=document.createElement("p")
            let instructor=document.createElement("p")
            let type=document.createElement("p")
            let studenttotal=document.createElement("p")
            let studenttype=document.createElement("p")
            // type.style.backgroundColor="lightgray";
            type.style.width="100px";
            title.innerText=data[d].coursename;
            instructor.innerText=data[d].institute;
    
            // let len=el.certificates.length;
            // if(len==0 || len == 1){
            type.innerText=data[d].category
            // }else if(len==2){
            //     type.innerText="Specialization";
            // }
    
            function getRandomNumberBetween(min,max){
                return Math.floor(Math.random()*(max-min+1)+min);
            }
            let num=getRandomNumberBetween(200,998)
            studenttotal.innerText=data[d].student_enroll
            studenttotal.innerHTML=`<div><i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;| ${data[d].student_enroll}Students</div>`
    
            var randNo = Math.floor(Math.random() * 3) + 1
            if (randNo==0 || randNo==1){
               var st="Beginner";
            }else if(randNo==2){
                var st="Intermediate";
            }else if(randNo==3){
                var st="Advanced";
            }
            studenttype.innerText=st
            let hr=document.createElement("hr")
            descdiv.append(title,instructor,type,studenttotal,studenttype)
            maindiv.append(imgdiv,descdiv)
            maindiv.onclick=function(){
                alert("go to desc page")
                document.location.href="courseDescription.html";
            }
            parent.append(maindiv,hr)
        }
}
}


async function subject_select(){
    empty()
    let lang_form=document.getElementById("formid4")
    let subject_name=lang_form.subject[lang_form.subject.selectedIndex].value
    let data = JSON.parse(localStorage.getItem("productData"));
    show_server_data_subject(data.data,subject_name)
}

function show_server_data_subject(data,subject_name){
    empty()
   
    
        for(var d=0;d<data.length;d++){
            
            if(data[d].subject==subject_name){
            let maindiv=document.createElement("div")
            let imgdiv=document.createElement("div")
            let descdiv=document.createElement("div")
    
            let img=document.createElement("img")
            img.src=data[d].img
            imgdiv.append(img)
            //description
    
            let title=document.createElement("p")
            let instructor=document.createElement("p")
            let type=document.createElement("p")
            let studenttotal=document.createElement("p")
            let studenttype=document.createElement("p")
            // type.style.backgroundColor="lightgray";
            type.style.width="100px";
            title.innerText=data[d].coursename;
            instructor.innerText=data[d].institute;
    
            // let len=el.certificates.length;
            // if(len==0 || len == 1){
            type.innerText=data[d].category
            // }else if(len==2){
            //     type.innerText="Specialization";
            // }
    
            function getRandomNumberBetween(min,max){
                return Math.floor(Math.random()*(max-min+1)+min);
            }
            let num=getRandomNumberBetween(200,998)
            studenttotal.innerText=data[d].student_enroll
            studenttotal.innerHTML=`<div><i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;| ${data[d].student_enroll}Students</div>`
    
            var randNo = Math.floor(Math.random() * 3) + 1
            if (randNo==0 || randNo==1){
               var st="Beginner";
            }else if(randNo==2){
                var st="Intermediate";
            }else if(randNo==3){
                var st="Advanced";
            }
            studenttype.innerText=st
            let hr=document.createElement("hr")
            descdiv.append(title,instructor,type,studenttotal,studenttype)
            maindiv.append(imgdiv,descdiv)
            maindiv.onclick=function(){
                alert("go to desc page")
                document.location.href="courseDescription.html";
            }
            parent.append(maindiv,hr)
        }
    }
}
   

async function skill_select(){
    empty()
    let lang_form=document.getElementById("formid5")
    let skill_name=lang_form.skill[lang_form.skill.selectedIndex].value
    let data = JSON.parse(localStorage.getItem("productData"));
    show_server_data_skill(data.data,skill_name)
}

function show_server_data_skill(data,skill_name){
    empty()
    for(var d=0;d<data.length;d++){
            
        if(data[d].skill==skill_name){
        let maindiv=document.createElement("div")
        let imgdiv=document.createElement("div")
        let descdiv=document.createElement("div")

        let img=document.createElement("img")
        img.src=data[d].img
        imgdiv.append(img)
        //description

        let title=document.createElement("p")
        let instructor=document.createElement("p")
        let type=document.createElement("p")
        let studenttotal=document.createElement("p")
        let studenttype=document.createElement("p")
        // type.style.backgroundColor="lightgray";
        type.style.width="100px";
        title.innerText=data[d].coursename;
        instructor.innerText=data[d].institute;

        // let len=el.certificates.length;
        // if(len==0 || len == 1){
        type.innerText=data[d].category
        // }else if(len==2){
        //     type.innerText="Specialization";
        // }

        function getRandomNumberBetween(min,max){
            return Math.floor(Math.random()*(max-min+1)+min);
        }
        let num=getRandomNumberBetween(200,998)
        studenttotal.innerText=data[d].student_enroll
        studenttotal.innerHTML=`<div><i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;| ${data[d].student_enroll}Students</div>`

        var randNo = Math.floor(Math.random() * 3) + 1
        if (randNo==0 || randNo==1){
           var st="Beginner";
        }else if(randNo==2){
            var st="Intermediate";
        }else if(randNo==3){
            var st="Advanced";
        }
        studenttype.innerText=st
        let hr=document.createElement("hr")
        descdiv.append(title,instructor,type,studenttotal,studenttype)
        maindiv.append(imgdiv,descdiv)
        maindiv.onclick=function(){
            alert("go to desc page")
            document.location.href="courseDescription.html";
        }
        parent.append(maindiv,hr)
    }
}
}

async function learning_select(){
    empty()
    let lang_form=document.getElementById("formid7")
    let learning_name=lang_form.learning[lang_form.learning.selectedIndex].value
    let data = JSON.parse(localStorage.getItem("productData"));
    show_server_data_learning(data.data,learning_name)
}


function show_server_data_learning(data,learning_name){
    empty()
    for(var d=0;d<data.length;d++){
            
        if(data[d].learning==learning_name || data[d].category==learning_name){
        let maindiv=document.createElement("div")
        let imgdiv=document.createElement("div")
        let descdiv=document.createElement("div")

        let img=document.createElement("img")
        img.src=data[d].img
        imgdiv.append(img)
        //description

        let title=document.createElement("p")
        let instructor=document.createElement("p")
        let type=document.createElement("p")
        let studenttotal=document.createElement("p")
        let studenttype=document.createElement("p")
        // type.style.backgroundColor="lightgray";
        type.style.width="100px";
        title.innerText=data[d].coursename;
        instructor.innerText=data[d].institute;

        // let len=el.certificates.length;
        // if(len==0 || len == 1){
        type.innerText=data[d].category
        // }else if(len==2){
        //     type.innerText="Specialization";
        // }

        function getRandomNumberBetween(min,max){
            return Math.floor(Math.random()*(max-min+1)+min);
        }
        let num=getRandomNumberBetween(200,998)
        studenttotal.innerText=data[d].student_enroll
        studenttotal.innerHTML=`<div><i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;<i class="fa fa-star yellow-color " ></i>&nbsp;| ${data[d].student_enroll}Students</div>`

        var randNo = Math.floor(Math.random() * 3) + 1
       
        studenttype.innerText=data[d].learning
        let hr=document.createElement("hr")
        descdiv.append(title,instructor,type,studenttotal,studenttype)
        maindiv.append(imgdiv,descdiv)
        maindiv.onclick=function(){
            alert("go to desc page")
            document.location.href="courseDescription.html";
        }
        parent.append(maindiv,hr)
    }
}
}

async function clearsearch(){
    window.location.reload()
}