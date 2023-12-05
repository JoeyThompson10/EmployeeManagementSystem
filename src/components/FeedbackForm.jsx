import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const FeedbackForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        window.alert('Thank you for your feedback!');
    };

    return (
        <div className='container mt-5'>
            <h1>Feedback and Suggestions</h1>

            <form onSubmit={handleSubmit} className="mt-4">
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" name="name" id="name" className="form-control" required />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" name="email" id="email" className="form-control" required />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="feedback" className="form-label">Feedback:</label>
                    <textarea name="feedback" id="feedback" className="form-control" cols="30" rows="10" required></textarea>
                </div>

                <input type="submit" value="Submit" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default FeedbackForm;
