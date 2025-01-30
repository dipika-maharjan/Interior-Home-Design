import React, { useState } from "react";
import '../../styles/BookConsultation.css';
import bookConsult from '../../assets/images/bookConsult.avif';

function BookConsultation(){
        const [name, setName] = useState('');
        const [contact, setContact] = useState('');
        const [description, setDescription] = useState('');

        const handleSubmit = (event) => {
            event.preventDefault();

            console.log('Name:', name);
            console.log('Contact No.:', contact);
            console.log('Enter your description:', description);

          };

    return(
        <div>
            <div className="bookWrapper">
                <div className="bg-image" style={{ backgroundImage: `url(${bookConsult})` }} >
                <div className="book-header">
                    <h1>Tell us your story</h1>
                    <h2>So we can help create your dream space.</h2>
                </div>

                <form className="bookContent" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your full name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input
                        type="number"
                        id="contact"
                        placeholder="Enter your contact number"
                        required
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Enter your description</label>
                    <input
                        type="text"
                        id="description"
                        placeholder="Describe your decor needs"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="form-footer">
                <button type="submit" className="consultBtn">Book Consultation</button>
                </div>
                <p>Get a design you'll love - guaranteed!</p>
                </form>
                </div>

            </div>

        </div>
    )
}
export default BookConsultation;