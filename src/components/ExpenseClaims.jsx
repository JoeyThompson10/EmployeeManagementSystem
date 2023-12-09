import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const ExpenseClaims = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        window.alert('Your expense claim has been submitted.');
    };


    return (
        <div className = 'expense claim form'>
            <h2>Expense Claims</h2>

            <form onSubmit={handleSubmit} className='expense claim form-2' action="/action_page.php">
                <div className='expense-submission'>
                    <label htmlFor="name" className="form=label">Name:</label>
                    <input type="text" name="name" id="name" className="form-control" required />
                </div>

                <div className='expense-submission'>
                    <label htmlFor="amount" className="form=label">Please enter amount spent:</label>
                    <input type="text" name="amount" id="amount" className="form-control" required />
                </div>

                <div className='expense-submission'>
                    <label htmlFor="description" className="form=label">Please enter description on what money was used on:</label>
                    <input type="text" name="description" id="description" className="form-control" required />
                </div>

                <div className='expense-submission'>
                    <label htmlFor="receipt" className="form=label">Please provide receipt:</label>
                    <input type="file" name="description" id="description" className="form-control" required />
                </div>

                <input type="submit" value="Submit" className="btn btn-primary" />

            </form>
        </div>
    );
};

export default ExpenseClaims;