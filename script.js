const searchform = document.getElementById("search");
const searchbox = document.getElementById("search-box");
const searchresult = document.getElementById("search-result");
const showmore = document.getElementById("show-more");

let keyword = ``;
let page = 1;
const accesskey = `6j_dKSCPbNzyqAKluLxNSc5Vpl63zrDKXTJKMfLxZY0`;

async function searchImages(){
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const Results = data.results;

    Results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small; // Correctly accessing the `urls` property of each `result`
        const imagelink = document.createElement("a");
        imagelink.href= result.links.html;
        imagelink.target = "_blank";
        imagelink.appendChild(image);
        searchresult.appendChild(imagelink);
    })
    showmore.style.display = "block";
}

searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page =1;
    searchImages();
})

showmore.addEventListener("click",()=>{
    page++;
    searchImages();
})