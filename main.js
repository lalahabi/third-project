const API_KEY = 'e069d8ca7aec4b55b3b8477a11e2ee2f'
let news=[]
const getLatestNews = async () =>{
    const url = new URL(`https://jellytimes.netlify.app/top-headlines?country=kr`
    );
    const response = await fetch(url);
    const data = await response.json();
    news = data.articles;
    console.log("뉴스", news);
};

getLatestNews();
