let news = [];

const getLatestNews = async() => {
    const url = new URL (
        `https://jellytimes.netlify.app/top-headlines`
    );
    const response = await fetch(url);
    const data = await response.json();
    news = data.articles;
    console.log("uuu",news)
};
getLatestNews();
