
// const API_KEY = `e069d8ca7aec4b55b3b8477a11e2ee2f`
let newsList = [];
const menus = document.querySelectorAll(".menus button")
menus.forEach(menu=>menu.addEventListener("click",(event)=>getNewsByCategory(event)))

// let url= new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
let url= new URL(`https://jellytimes.netlify.app/top-headlines`)

const getNews = async() => {
    try {
        const response = await fetch(url);

        const data = await response.json();
        if(response.status===200){
            if(data.articles.length===0){
                throw new Error("No result for this search");
            }
            newsList = data.articles;
            render();  
        }else{
            throw new Error(data.message)
        }
    }catch(error){
        errorRender(error.message)

    };

}

const getLatestNews = async() => {
    url = new URL (
       // `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
       `https://jellytimes.netlify.app/top-headlines`
    );

    getNews()
};

const getNewsByCategory= async (event)=>{
    const category=event.target.textContent.toLowerCase();
    console.log("category", category);
    // const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
    url = new URL(`https://jellytimes.netlify.app/top-headlines?category=${category}`
    );

    getNews()
};

const getNewsByKeyword= async ()=>{
    const keyword = document.getElementById("search-input").value
    
    url = new URL(`https://jellytimes.netlify.app/top-headlines?q=${keyword}`
    );

    getNews()
}

const render=()=>{
    const newsHTML = newsList.map(
        (news)=>`<div class="row news">
    <div class="col-lg-4">
    <img class="news-img-size"
    src="${
        news.urlToImage ||
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"
}"/> 
</div>
<div class="col-lg-8">
    <h2>
        ${news.title}
    </h2>
    <p>
        <p>${
            news.description == null || news.description == ""
              ? "내용없음"
              : news.description.length > 200
              ? news.description.substring(0, 200) + "..."
              : news.description
       }</p>
    </p>
    <div>
        ${news.source.name} * ${news.publishedAt}

        ${news.source.name || "no source"} 
        ${moment(
            news.publishedAt
         ).fromNow('MMMM Do YYYY, h:mm:ss a')}</div>
    </div>
</div>
</div>`
    ).join('');
    console.log("html", newsHTML)

    document.getElementById("news-board").innerHTML=newsHTML;

}

const errorRender =(errorMessage) => {
    const errorHTML =  `<div class="alert alert-danger" role="alert">
    ${errorMessage}
        </div>`;
    document.getElementById("news-board").innerHTML=errorHTML
}

const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };
  
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  const openSearchBox = () => {
    let inputArea = document.getElementById("input-area");
    if (inputArea.style.display === "inline") {
      inputArea.style.display = "none";
    } else {
      inputArea.style.display = "inline";
    }
  };

getLatestNews();
