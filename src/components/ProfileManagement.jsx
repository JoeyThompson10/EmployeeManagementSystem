import React, { useState, useEffect } from 'react';
import { updateUserProfile, getEmployee } from '../MongoDbClient'; // Import the helper function

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
        // Handle the response (e.g., show a confirmation message)
        console.log(response);
        window.alert("Profile updated!");
    };

    return (
        <div>
            <h2>Profile Management</h2>
            <form onSubmit={handleSubmit}>
                {/* Form fields */}
                <label>Email Address:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>First Name:
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <label>Last Name:
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
                <label>Phone Number:
                    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </label>
                <label>Address:
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </label>
                <label>City:
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                </label>
                <label>State:
                    <input type="text" value={state} onChange={(e) => setState(e.target.value)} />

                </label>
                <label>Zip Code:
                    <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                </label>
                <label>Country:
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
                </label>
                <label>Emergency Contact Name:
                    <input type="text" value={emergencyContactName} onChange={(e) => setEmergencyContactName(e.target.value)} />
                </label>
                <label>Emergency Contact Phone:
                    <input type="tel" value={emergencyContactPhone} onChange={(e) => setEmergencyContactPhone(e.target.value)} />
                </label>
                <label>Emergency Contact Email:
                    <input type="email" value={emergencyContactEmail} onChange={(e) => setEmergencyContactEmail(e.target.value)} />
                </label>
                <label>Emergency Contact Address:
                    <input type="text" value={emergencyContactAddress} onChange={(e) => setEmergencyContactAddress(e.target.value)} />
                </label>
                <label>Emergency Contact City:
                    <input type="text" value={emergencyContactCity} onChange={(e) => setEmergencyContactCity(e.target.value)} />
                </label>
                <label>Emergency Contact State:
                    <input type="text" value={emergencyContactState} onChange={(e) => setEmergencyContactState(e.target.value)} />
                </label>
                <label>Emergency Contact Zip Code:
                    <input type="text" value={emergencyContactZipCode} onChange={(e) => setEmergencyContactZipCode(e.target.value)} />
                </label>
                <label>Emergency Contact Country:
                    <input type="text" value={emergencyContactCountry} onChange={(e) => setEmergencyContactCountry(e.target.value)} />
                </label>

                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default ProfileManagement;
