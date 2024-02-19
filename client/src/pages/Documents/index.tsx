import React from 'react';
import { Link } from 'react-router-dom';
import { getAllQuotes } from './queries';

const DocumentsPage: React.FC = () => {
    const [data, setData] = React.useState<any[]>([]);

    React.useEffect(() => {
        getAllQuotes().then((quotes) => {
            setData(quotes);
        });
    }, []);

    return (
        <div>
            <h1>Documents</h1>
            {data.map((quote: any) => {
                return (
                    <button key={quote.quote_number}>
                        <Link to={`/getQuotesById/${quote.quote_number}`}>
                            {quote.quote_number}
                        </Link>
                    </button>
                );
            })}
            <Link to="/createPdf">Créer un PDF</Link>
        </div>
    );
};

export default DocumentsPage;