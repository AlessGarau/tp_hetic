import { useState } from 'react';
import jsPDF from 'jspdf';
import axios from 'axios';

function QuoteForm() {
    const [form, setForm] = useState({
        send_date: '',
        quote_number: '',
        total_ht: '',
        discount: '',
        total_ttc: '',
        payement_condition: '',
        validity_date: '',
        taxes: '',
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        generatePDF();

        try {
            const response = await axios.post('http://localhost:5050/saveQuote', form);
            console.log(response.data);
        } catch (error) {
            console.error(`Error: ${error}`);
        }

        setForm({
            send_date: '',
            quote_number: '',
            total_ht: '',
            discount: '',
            total_ttc: '',
            payement_condition: '',
            validity_date: '',
            taxes: '',
        });
    };

    function generatePDF() {
        const doc = new jsPDF();
        const data = form;
        let line = 20;

        for (const key in data) {
            doc.text(key + ': ', 10, line);
            line += 10;
        }

        doc.save('form_data.pdf');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="send_date">Send Date:</label>
            <input type="date" name="send_date" value={form.send_date} onChange={handleChange} />

            <label htmlFor="quote_number">Quote Number:</label>
            <input name="quote_number" value={form.quote_number} onChange={handleChange} />

            <label htmlFor="total_ht">Total HT:</label>
            <input type="number" name="total_ht" value={form.total_ht} onChange={handleChange} />

            <label htmlFor="discount">Discount:</label>
            <input type="number" name="discount" value={form.discount} onChange={handleChange} />

            <label htmlFor="total_ttc">Total TTC:</label>
            <input type="number" name="total_ttc" value={form.total_ttc} onChange={handleChange} />

            <label htmlFor="payement_condition">Payment Condition:</label>
            <input name="payement_condition" value={form.payement_condition} onChange={handleChange} />

            <label htmlFor="validity_date">Validity Date:</label>
            <input type="date" name="validity_date" value={form.validity_date} onChange={handleChange} />

            <label htmlFor="taxes">Taxes:</label>
            <input type="number" name="taxes" value={form.taxes} onChange={handleChange} />

            <button type="submit">Submit</button>
        </form>
    );
}

export default QuoteForm;