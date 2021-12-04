const displayField = document.querySelector('.imageContaintent');
let url= "https://thatcopy.pw/catapi/restId/";

const DisplayImg = (async(i)=>{
    let gettingImg = await fetch(`${url}${i}`).catch(error => {alert(`There is some problem while fatching the Url: ${url}${i}`)});
    let getImg= await gettingImg.json();
    processingData(getImg);
})

const processingData = ((item)=>{
    const gettingData = 
    `
        <a class="imageDisplay " href="${item.url}">
            <img class="image shadow p-3" src="${item.webpurl}" '>
        </a>
    `;
    let getData = document.createElement('div');
    getData.setAttribute('class',`col-6 col-sm-4 col-md-3 col-lg-2 w-100 imageCont onclick='${item.url}'`);
    getData.innerHTML = gettingData;
    console.log(getData);
    displayField.append(getData);
});

const count =()=>{
    for(let i=1;i<59;i++){
        DisplayImg(i);
    }
}

count();
