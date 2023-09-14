import NewsItem from './NewsItem';
import Header from './Header';

function NewsList({ data }) {
    return (
        <div >
         
                <Header />
    

            <div className="mt-10 px-4 flex flex-wrap ">
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
            </div>
        </div>
    );
}

export default NewsList;
