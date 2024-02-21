
//const API_KEY = `e069d8ca7aec4b55b3b8477a11e2ee2f`
let newsList = [];

const getLatestNews = async() => {
    const url = new URL (
        //`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
        `https://jellytimes.netlify.app/top-headlines`
    );
    const response = await fetch(url);
    const data = await response.json();
    newsList = data.articles;
    render();
    console.log("uuu",newsList)
};

const render=()=>{
    const newsHTML = newsList.map(
        (news)=>`<div class="row news">
    <div class="col-lg-4">
    <img class="news-img-size"
    src="${
        news.urlToImag}" ||
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"
}" />
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

    document.getElementById('news-board').innerHTML=newsHTML;

}

getLatestNews();
