const API_KEY = 'e069d8ca7aec4b55b3b8477a11e2ee2f'

const getLatestNews = async() => {
    const url = new URL (
        `https://jellytimes.netlify.app/top-headlines`
    );
    const response = await fetch(url);
    const data = await response.json()
    let news = data.articles;
    console.log("uuu",news)
};
getLatestNews();
