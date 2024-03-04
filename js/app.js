

const discusses = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const alldata = data.posts;

    const discueee = document.getElementById('discuss');


    alldata.forEach(item => {

        const div = document.createElement('div');

        div.className = `bg-amber-50 flex gap-3 rounded-md p-1`;
        div.innerHTML = ` 
                            <div class="${item.isActive ? 'avatar online placeholder ' : 'avatar offline placeholder'}">
                                <div class="w-24 rounden-full">
                                    <div class="grid w-32 h-full bg-base-300 place-items-center"><img src=${item.image}alt=""></div>
                                </div>
                            </div>   
                            <div class="p-3 space-y-2">
                                <div class="flex gap-3">
                                    <p># <span>${item.category}</span></p>
                                    <p>Author: <span>${item.author.name}</span></p>

                                </div>
                                <h1 class="font-bold">${item.title}</h1>
                                <p>${item.description}</p>
                                <div class="lg:flex justify-between items-center space-x-20 ">
                                    <div class="lg:flex gap-3">
                                        <div class="flex">
                                            <img src="./images/Group 13.png" alt="">
                                            <p>${item.comment_count}</p>
                                        </div>
                                        <div class="flex">
                                            <img src="./images/Group 16.png" alt="">
                                            <p>${item.view_count}</p>
                                        </div>
                                        <div class="flex">
                                            <img src="./images/Group 18.png" alt="">
                                            <p>${item.posted_time} min</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button  class="btn btn-circle bg-green-300 "><img onclick="getID('${item.title.slice(0,27)}','${item.view_count}')" class="w-full " src="./images/email 1.png" alt=""></button>
                                    </div>
                                </div>
                            </div>`
        discueee.appendChild(div);
    
    
     });
     
     
}

discusses();

// title add
let count =0;
const getID = (title,view_count)=>{
    const array=[title, view_count];
    count++;
    document.getElementById('counted').innerText = count;
    
    const msgbtn = document.getElementById('massagebtn');
    const div1 = document.createElement('div');
                    div1.className = `bg-white rounded-md p-3 my-3`;
                    div1.innerHTML = ` <div class="lg:flex ">
                    <h1 class="font-bold flex flex-col">${array[0]}</h1>
                    <div class="flex justify-center items-center">
                        <img src="./images/Group 16.png" alt="">
                        <p>${array[1]}</p>
                    </div>
                </div>`
                msgbtn.appendChild(div1);
}





// search value
const searchValues = async(serID)=>{
    document.getElementById('loadingSpiner').style.display='block';
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${serID}`);
    const data = await res.json();
    const alldata = data.posts;

    const discueee = document.getElementById('discuss');
    discueee.innerHTML=''


    alldata.forEach(item => {
        setTimeout(()=>{
        document.getElementById('loadingSpiner').style.display='none' 

        const div = document.createElement('div');

        div.className = `bg-amber-50 flex gap-3 rounded-md p-1`;
        div.innerHTML = ` 
                            <div class="${item.isActive ? 'avatar online placeholder ' : 'avatar offline placeholder'}">
                                <div class="w-24 rounden-full">
                                    <div class="grid w-32 h-full bg-base-300 place-items-center"><img src=${item.image}alt=""></div>
                                </div>
                            </div>   
                            <div class="p-3 space-y-2">
                                <div class="flex gap-3">
                                    <p># <span>${item.category}</span></p>
                                    <p>Author: <span>${item.author.name}</span></p>

                                </div>
                                <h1 class="font-bold">${item.title}</h1>
                                <p>${item.description}</p>
                                <div class="lg:flex justify-between items-center space-x-20 ">
                                    <div class="lg:flex gap-3">
                                        <div class="flex">
                                            <img src="./images/Group 13.png" alt="">
                                            <p>${item.comment_count}</p>
                                        </div>
                                        <div class="flex">
                                            <img src="./images/Group 16.png" alt="">
                                            <p>${item.view_count}</p>
                                        </div>
                                        <div class="flex">
                                            <img src="./images/Group 18.png" alt="">
                                            <p>${item.posted_time} min</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button  class="btn btn-circle bg-green-300 "><img onclick="getID('${item.title.slice(0,27)}','${item.view_count}')" class="w-full " src="./images/email 1.png" alt=""></button>
                                    </div>
                                </div>
                            </div>`
        discueee.appendChild(div);

    },2000);


    
    
     });
     
     
}

// handel search button

const handelSearch =()=>{
    const searchFild=document.getElementById('searchFild');
    searchFild.innerText=''
    const inputSearched =searchFild.value;
    if(inputSearched){
        searchValues(inputSearched)
    }
    else{
        alert('please enter valid catagory')
    }
}



// latest post

const lastPost = async () => {
    const res = await fetch(' https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const lastBT= document.getElementById('lastBtnt');

    data.forEach(item1 => {
        const div1 = document.createElement('div');
        div1.className = `card w-80 bg-base-100 shadow-xl space-x-3`;
        div1.innerHTML = `<figure class="px-5 pt-10">
        <img src=${item1.cover_image} alt="" class="rounded-xl" />
      </figure>
      <div class="card-body ">
        <div class="flex space-x-1">
          <img src="./images/Frame9.png" alt="">
          <p>${item1.author.posted_date?item1.author.posted_date:'No Publish Data'}</p>
        </div>
        <h1 class="font-bold">${item1.title}</h1>
        <p>${item1.description}</p>
        <div class="flex gap-2">
          <div class="w-16 h-16">
              <img class="rounded-full" src=${item1.profile_image} alt="">
          </div>
          <div>
              <h1 class="font-bold">${item1.author.name}</h1>
              <p>${item1.author.designation?item1.author.designation:'Unknown'}</p>
          </div>
        </div>
      </div>`
        lastBT.appendChild(div1);

    })
}


lastPost();