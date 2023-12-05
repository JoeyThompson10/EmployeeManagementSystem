import React, { useState, useEffect } from 'react';
import { updateUserProfile, getEmployee } from '../MongoDbClient';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfileManagement = () => {
    const _id = localStorage.getItem('username');

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [country, setCountry] = useState('');
    const [emergencyContactName, setEmergencyContactName] = useState('');
    const [emergencyContactPhone, setEmergencyContactPhone] = useState('');
    const [emergencyContactEmail, setEmergencyContactEmail] = useState('');
    const [emergencyContactAddress, setEmergencyContactAddress] = useState('');
    const [emergencyContactCity, setEmergencyContactCity] = useState('');
    const [emergencyContactState, setEmergencyContactState] = useState('');
    const [emergencyContactZipCode, setEmergencyContactZipCode] = useState('');
    const [emergencyContactCountry, setEmergencyContactCountry] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const userData = await getEmployee(_id);
            if (userData) {
                setEmail(userData.email || '');
                setFirstName(userData.firstName || '');
                setLastName(userData.lastName || '');
                setPhoneNumber(userData.phoneNumber || '');
                setAddress(userData.address || '');
                setCity(userData.city || '');
                setState(userData.state || '');
                setZipCode(userData.zipCode || '');
                setCountry(userData.country || '');
                setEmergencyContactName(userData.emergencyContactName || '');
                setEmergencyContactPhone(userData.emergencyContactPhone || '');
                setEmergencyContactEmail(userData.emergencyContactEmail || '');
                setEmergencyContactAddress(userData.emergencyContactAddress || '');
                setEmergencyContactCity(userData.emergencyContactCity || '');
                setEmergencyContactState(userData.emergencyContactState || '');
                setEmergencyContactZipCode(userData.emergencyContactZipCode || '');
                setEmergencyContactCountry(userData.emergencyContactCountry || '');
            }
        };

        fetchUserData();
    }, [_id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await updateUserProfile(
            _id,
            email,
            firstName,
            lastName,
            phoneNumber,
            address,
            city,
            state,
            zipCode,
            country,
            emergencyContactName,
            emergencyContactPhone,
            emergencyContactEmail,
            emergencyContactAddress,
            emergencyContactCity,
            emergencyContactState,
            emergencyContactZipCode,
            emergencyContactCountry
        );
        console.log(response);
        window.alert("Profile updated!");
    };

    return (
        <div className='container mt-5'>
            <h2 className='text-center'>Profile Management</h2>
            <form onSubmit={handleSubmit} className='mt-4'>
                <div className="form-group">
                    <label>Email Address:</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input type="tel" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>State:</label>
                    <input type="text" className="form-control" value={state} onChange={(e) => setState(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Zip Code:</label>
                    <input type="text" className="form-control" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Country:</label>
                    <input type="text" className="form-control" value={country} onChange={(e) => setCountry(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Emergency Contact Name:</label>
                    <input type="text" className="form-control" value={emergencyContactName} onChange={(e) => setEmergencyContactName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Emergency Contact Phone:</label>
                    <input type="tel" className="form-control" value={emergencyContactPhone} onChange={(e) => setEmergencyContactPhone(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Emergency Contact Email:</label>
                    <input type="email" className="form-control" value={emergencyContactEmail} onChange={(e) => setEmergencyContactEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Emergency Contact Address:</label>
                    <input type="text" className="form-control" value={emergencyContactAddress} onChange={(e) => setEmergencyContactAddress(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Emergency Contact City:</label>
                    <input type="text" className="form-control" value={emergencyContactCity} onChange={(e) => setEmergencyContactCity(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Emergency Contact State:</label>
                    <input type="text" className="form-control" value={emergencyContactState} onChange={(e) => setEmergencyContactState(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Emergency Contact Zip Code:</label>
                    <input type="text" className="form-control" value={emergencyContactZipCode} onChange={(e) => setEmergencyContactZipCode(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Emergency Contact Country:</label>
                    <input type="text" className="form-control" value={emergencyContactCountry} onChange={(e) => setEmergencyContactCountry(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary mt-3">Update Profile</button>
            </form>
        </div>
    );
};

export default ProfileManagement;
