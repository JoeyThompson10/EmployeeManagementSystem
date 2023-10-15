import React from 'react';

const FeedbackForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to the server
    };

    return (
        <div>
            <h1>Feedback and Suggestions</h1>

            <form onSubmit={handleSubmit} className="suggestionForm">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" required /><br /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" required /><br /><br />

                <label htmlFor="feedback">Feedback:</label>
                <textarea name="feedback" id="feedback" cols="30" rows="10" required></textarea><br /><br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FeedbackForm;
