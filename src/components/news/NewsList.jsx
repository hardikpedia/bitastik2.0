import NewsItem from './NewsItem';
import Header from './Header';

function NewsList({ data }) {
    return (
        <>
            <div className="">
                <Header />
            </div>

            <ul className="list-none mt-10 px-4 flex flex-wrap justify-center">
                {data.map((news) => (
                    <NewsItem
                        key={news.id}
                        id={news.id}
                        image={news.image}
                        title={news.title}
                        date={news.date}
                        description={news.description}
                    />
                                       
                ))} 
            </ul>
        </>
    );
}

export default NewsList;
