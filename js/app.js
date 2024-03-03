

const discusses = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const alldata = data.posts;
    const discueee = document.getElementById('discuss');


    alldata.forEach(item => {
        console.log(item)

        const div = document.createElement('div');

        div.className = `bg-amber-50 flex gap-3 rounded-md p-1`;
        div.innerHTML = ` 
                            <div class="${item.isActive?'avatar online placeholder ':'avatar offline placeholder'}">
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
                                            <p>${item.posted_time}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button class="btn btn-circle bg-green-300 massage"><img  class="w-full " src="./images/email 1.png" alt=""></button>
                                    </div>
                                </div>
                            </div>`
        discueee.appendChild(div);



        // title show
        const allbtn = document.getElementsByClassName('massage');

        let count = 0;

        const msgbtn = document.getElementById('massagebtn');

        for (const btnt of allbtn) {
            btnt.addEventListener('click', function () {
                console.log(btnt)
                count++;
                document.getElementById('counted').innerText = count;
                const div1 = document.createElement('div');
                div1.className = `bg-white rounded-md p-3`;
                div1.innerHTML = ` <div class="lg:flex ">
                <h1 class="font-bold flex flex-col">${item.title}</h1>
                <div class="flex justify-center items-center">
                    <img src="./images/Group 16.png" alt="">
                    <p>${item.view_count}</p>
                </div>
            </div>`

                msgbtn.appendChild(div1);

            })
        }


    });




}
discusses();