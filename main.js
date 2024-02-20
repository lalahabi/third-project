const API_KEY = 'e069d8ca7aec4b55b3b8477a11e2ee2f'
let news=[]
const getLatestNews = async () =>{
    const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );
    const response = await fetch(url);
    const data = response.json();
    news = data.articles;
    console.log("rrrr", response);
};

getLatestNews();
