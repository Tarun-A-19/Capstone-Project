import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// --- Step Components (No changes needed in these) ---
const Step1 = ({ formData, handleInputChange, handleNext, errors, setFocusedInput, getInputStyle, refs }) => (
    <>
      <h1 style={{ textAlign: 'center', fontSize: '1.8rem' }}>Create an Account</h1>
      <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#6c757d', marginBottom: '30px' }}>Step 1 of 3: Basic Information</p>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="fullName" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Full Name</label>
        <input ref={refs.fullName} name="fullName" type="text" placeholder="Enter your full name" value={formData.fullName} onChange={handleInputChange} onFocus={() => setFocusedInput('fullName')} onBlur={() => setFocusedInput(null)} style={getInputStyle('fullName')} />
        {errors.fullName && <p style={{ color: '#dc3545', fontSize: '0.8rem', marginTop: '5px' }}>{errors.fullName}</p>}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email Address</label>
        <input ref={refs.email} name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleInputChange} onFocus={() => setFocusedInput('email')} onBlur={() => setFocusedInput(null)} style={getInputStyle('email')} />
        {errors.email && <p style={{ color: '#dc3545', fontSize: '0.8rem', marginTop: '5px' }}>{errors.email}</p>}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Password</label>
        <input ref={refs.password} name="password" type="password" placeholder="Min. 8 characters with a special symbol" value={formData.password} onChange={handleInputChange} onFocus={() => setFocusedInput('password')} onBlur={() => setFocusedInput(null)} style={getInputStyle('password')} />
        {errors.password && <p style={{ color: '#dc3545', fontSize: '0.8rem', marginTop: '5px' }}>{errors.password}</p>}
      </div>
      <button type="button" onClick={handleNext} style={{ width: '100%', padding: '15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem' }}>Create Account & Continue</button>
    </>
);

const Step2 = ({ formData, handleInputChange, handleNext, prevStep, errors, setFocusedInput, getInputStyle, refs }) => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
    <>
      <h1 style={{ textAlign: 'center', fontSize: '1.8rem' }}>Personal Information</h1>
      <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#6c757d', marginBottom: '30px' }}>Step 2 of 3: Tell us more about you</p>
      
      <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Date of Birth</label>
          <div ref={refs.dob} style={{ display: 'flex', gap: '10px' }}>
              <select name="dobDay" value={formData.dobDay} onChange={handleInputChange} style={getInputStyle('dob')} >
                  <option value="">Day</option>
                  {days.map(day => <option key={day} value={day}>{day}</option>)}
              </select>
              <select name="dobMonth" value={formData.dobMonth} onChange={handleInputChange} style={getInputStyle('dob')} >
                  <option value="">Month</option>
                  {months.map((month, index) => <option key={month} value={index + 1}>{month}</option>)}
              </select>
              <select name="dobYear" value={formData.dobYear} onChange={handleInputChange} style={getInputStyle('dob')} >
                  <option value="">Year</option>
                  {years.map(year => <option key={year} value={year}>{year}</option>)}
              </select>
          </div>
          {errors.dob && <p style={{ color: '#dc3545', fontSize: '0.8rem', marginTop: '5px' }}>{errors.dob}</p>}
      </div>

       <div style={{ marginBottom: '20px' }}>
        <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Phone Number</label>
        <input ref={refs.phone} name="phone" type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={handleInputChange} onFocus={() => setFocusedInput('phone')} onBlur={() => setFocusedInput(null)} style={getInputStyle('phone')} />
        {errors.phone && <p style={{ color: '#dc3545', fontSize: '0.8rem', marginTop: '5px' }}>{errors.phone}</p>}
      </div>
       <div style={{ marginBottom: '20px' }}>
        <label htmlFor="address" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Address</label>
        <textarea ref={refs.address} name="address" rows="3" placeholder="Enter your full address" value={formData.address} onChange={handleInputChange} onFocus={() => setFocusedInput('address')} onBlur={() => setFocusedInput(null)} style={getInputStyle('address')} />
        {errors.address && <p style={{ color: '#dc3545', fontSize: '0.8rem', marginTop: '5px' }}>{errors.address}</p>}
      </div>
       <div style={{ marginBottom: '20px' }}>
        <label htmlFor="identityType" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Valid Identity</label>
        <select ref={refs.identityType} name="identityType" value={formData.identityType} onChange={handleInputChange} onFocus={() => setFocusedInput('identityType')} onBlur={() => setFocusedInput(null)} style={getInputStyle('identityType')}>
            <option value="">-- Select an ID --</option>
            <option value="aadhar">Aadhar Card</option>
            <option value="dl">Driver's License</option>
            <option value="passport">Passport</option>
        </select>
        {errors.identityType && <p style={{ color: '#dc3545', fontSize: '0.8rem', marginTop: '5px' }}>{errors.identityType}</p>}
      </div>
      {formData.identityType && (
        <div style={{ marginBottom: '20px' }}>
            <label htmlFor="identityNumber" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>{formData.identityType.charAt(0).toUpperCase() + formData.identityType.slice(1)} Number</label>
            <input ref={refs.identityNumber} name="identityNumber" type="text" placeholder="Enter your ID number" value={formData.identityNumber} onChange={handleInputChange} onFocus={() => setFocusedInput('identityNumber')} onBlur={() => setFocusedInput(null)} style={getInputStyle('identityNumber')} />
            {errors.identityNumber && <p style={{ color: '#dc3545', fontSize: '0.8rem', marginTop: '5px' }}>{errors.identityNumber}</p>}
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
        <button type="button" onClick={prevStep} style={{ width: '100%', padding: '15px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem' }}>Back</button>
        <button type="button" onClick={handleNext} style={{ width: '100%', padding: '15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem' }}>Next</button>
      </div>
    </>
    )
};

const Step3 = ({ formData, handleCheckboxChange, setFormData, prevStep, handleSubmit, errors, refs }) => (
    <>
      <h1 style={{ textAlign: 'center', fontSize: '1.8rem' }}>Final Step</h1>
      <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#6c757d', marginBottom: '30px' }}>Step 3 of 3: License & Terms</p>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input type="checkbox" id="hasDriversLicense" name="hasDriversLicense" checked={formData.hasDriversLicense} onChange={handleCheckboxChange} />
            <label htmlFor="hasDriversLicense" style={{ display: 'block', marginBottom: '0', fontWeight: '500' }}>Do you have a Driver's License?</label>
        </div>
      </div>
      {formData.hasDriversLicense && (
        <div style={{ marginBottom: '20px' }}>
            <label htmlFor="licensePhoto" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Upload Photo of License</label>
            <input ref={refs.licensePhoto} name="licensePhoto" type="file" onChange={(e) => setFormData(prev => ({...prev, licensePhoto: e.target.files[0]}))} style={{ width: '100%', padding: '12px 15px', border: '1px solid #dee2e6', borderRadius: '8px', fontSize: '1rem', boxSizing: 'border-box' }} />
            {errors.licensePhoto && <p style={{ color: '#dc3545', fontSize: '0.8rem', marginTop: '5px' }}>{errors.licensePhoto}</p>}
        </div>
      )}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Terms & Conditions</label>
        <div style={{ height: '100px', overflowY: 'auto', border: '1px solid #dee2e6', borderRadius: '8px', padding: '10px', fontSize: '0.8rem', color: '#6c757d', marginBottom: '15px' }}>
            <p>1. User agrees to provide accurate and current information during the registration process.</p>
            <p>2. The vehicle must be returned in the same condition it was received, excluding normal wear and tear.</p>
            <p>3. Any fines or penalties incurred during the rental period are the sole responsibility of the user.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input ref={refs.acceptedTerms} type="checkbox" id="acceptedTerms" name="acceptedTerms" checked={formData.acceptedTerms} onChange={handleCheckboxChange} />
            <label htmlFor="acceptedTerms" style={{ display: 'block', marginBottom: '0', fontWeight: '500' }}>I have read and agree to the terms and conditions.</label>
        </div>
        {errors.acceptedTerms && <p style={{ color: '#dc3545', fontSize: '0.8rem', marginTop: '5px' }}>{errors.acceptedTerms}</p>}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
        <button type="button" onClick={prevStep} style={{ width: '100%', padding: '15px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem' }}>Back</button>
        <button type="submit" style={{ width: '100%', padding: '15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem', opacity: formData.acceptedTerms ? 1 : 0.6 }} disabled={!formData.acceptedTerms}>
            Submit & Finish
        </button>
      </div>
    </>
);

// --- Main Signup Component ---
function Signup() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '', email: '', password: '', 
        dobDay: '', dobMonth: '', dobYear: '',
        dob: '', 
        phone: '', address: '',
        identityType: '', identityNumber: '', hasDriversLicense: false,
        licensePhoto: null, acceptedTerms: false,
    });
    const [errors, setErrors] = useState({});
    const [focusedInput, setFocusedInput] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const { dobDay, dobMonth, dobYear } = formData;
        if (dobDay && dobMonth && dobYear) {
            const dobString = `${dobYear}-${String(dobMonth).padStart(2, '0')}-${String(dobDay).padStart(2, '0')}`;
            setFormData(prev => ({...prev, dob: dobString}));
        }
    }, [formData.dobDay, formData.dobMonth, formData.dobYear]);

    const refs = {
        fullName: useRef(null), email: useRef(null), password: useRef(null),
        dob: useRef(null), phone: useRef(null), address: useRef(null), identityType: useRef(null),
        identityNumber: useRef(null), licensePhoto: useRef(null), acceptedTerms: useRef(null),
    };

    const validateStep = () => {
        const newErrors = {};
        if (step === 1) {
            if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
            if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'A valid email is required.';
            if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters.';
            else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) newErrors.password = 'Password must contain a special character.';
        }
        if (step === 2) {
            if (!formData.dobDay || !formData.dobMonth || !formData.dobYear) {
                newErrors.dob = 'A complete date of birth is required.';
            } else {
                const birthDate = new Date(formData.dob);
                const today = new Date();
                const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
                if (birthDate > eighteenYearsAgo) {
                    newErrors.dob = 'You must be at least 18 years old to sign up.';
                }
            }
            if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Please enter a valid 10-digit phone number.';
            if (!formData.address.trim()) newErrors.address = 'Address is required.';
            if (!formData.identityType) newErrors.identityType = 'Please select an ID type.';
            else {
                if (!formData.identityNumber.trim()) newErrors.identityNumber = 'ID number is required.';
                else if (formData.identityType === 'aadhar' && !/^\d{12}$/.test(formData.identityNumber)) newErrors.identityNumber = 'Aadhar must be 12 digits.';
                else if (formData.identityType === 'dl' && formData.identityNumber.length < 8) newErrors.identityNumber = 'Enter a valid DL number.';
                else if (formData.identityType === 'passport' && !/^[A-Z0-9]{8}$/i.test(formData.identityNumber)) newErrors.identityNumber = 'Enter a valid 8-character passport number.';
            }
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) {
            const firstErrorKey = Object.keys(newErrors)[0];
            if (refs[firstErrorKey] && refs[firstErrorKey].current) {
                refs[firstErrorKey].current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return false;
        }
        return true;
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: checked }));
    };
    const handleNext = () => {
        if (validateStep()) {
            setStep(prev => prev + 1);
        }
    };
    const prevStep = () => {
        setErrors({});
        setStep(prev => prev - 1);
    };

    // --- UPDATED handleSubmit FUNCTION ---
    const handleSubmit = async (e) => {
        e.preventDefault();
        const finalErrors = {};
        if (formData.hasDriversLicense && !formData.licensePhoto) finalErrors.licensePhoto = 'Please upload a photo of your license.';
        if (!formData.acceptedTerms) finalErrors.acceptedTerms = 'You must accept the terms and conditions.';
        setErrors(finalErrors);

        if (Object.keys(finalErrors).length > 0) {
            const firstErrorKey = Object.keys(finalErrors)[0];
            if (refs[firstErrorKey] && refs[firstErrorKey].current) {
                refs[firstErrorKey].current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        // 1. Create a FormData object to handle the file upload
        const dataToSubmit = new FormData();

        // 2. Append all fields from the state to the FormData object
        for (const key in formData) {
            dataToSubmit.append(key, formData[key]);
        }
        
        try {
            // 3. Send the FormData object. Axios will automatically set the correct headers.
            const response = await axios.post('http://localhost:5000/api/register', dataToSubmit);

            console.log('Success:', response.data);
            alert('Account created successfully! Redirecting to login...');
            navigate('/login');

        } catch (error) {
            if (error.response) {
                alert(`Error: ${error.response.data.message}`);
            } else if (error.request) {
                alert('Cannot connect to the server. Please make sure your backend is running.');
            } else {
                console.error('Error', error.message);
            }
        }
    };
    
    const styles = {
        input: { width: '100%', padding: '12px 15px', border: '1px solid #dee2e6', borderRadius: '8px', fontSize: '1rem', boxSizing: 'border-box', transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out' },
        inputFocus: { borderColor: '#80bdff', boxShadow: '0 0 0 4px rgba(0, 123, 255, 0.25)', outline: 'none' },
        inputError: { borderColor: '#dc3545', boxShadow: '0 0 0 4px rgba(220, 53, 69, 0.25)' },
    };
    
    const getInputStyleForMain = (name) => {
        const baseStyle = errors[name] ? { ...styles.input, ...styles.inputError } : styles.input;
        return focusedInput === name ? { ...baseStyle, ...styles.inputFocus } : baseStyle;
    };
    
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', minHeight: '100vh', boxSizing: 'border-box' }}>
            <div style={{ width: '100%', maxWidth: '500px', padding: '40px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
                <form onSubmit={handleSubmit}>
                    {step === 1 && <Step1 formData={formData} handleInputChange={handleInputChange} handleNext={handleNext} errors={errors} setFocusedInput={setFocusedInput} getInputStyle={getInputStyleForMain} refs={refs} />}
                    {step === 2 && <Step2 formData={formData} handleInputChange={handleInputChange} handleNext={handleNext} prevStep={prevStep} errors={errors} setFocusedInput={setFocusedInput} getInputStyle={getInputStyleForMain} refs={refs} />}
                    {step === 3 && <Step3 formData={formData} handleCheckboxChange={handleCheckboxChange} setFormData={setFormData} prevStep={prevStep} handleSubmit={handleSubmit} errors={errors} refs={refs} />}
                </form>
                {step === 1 && (
                    <p style={{ textAlign: 'center', marginTop: '25px', color: '#6c757d' }}>
                        Already have an account?{' '}
                        <Link to="/login" style={{ color: '#007bff', fontWeight: '600', textDecoration: 'none' }}>
                            Log in
                        </Link>
                    </p>
                )}
            </div>
        </div>
    );
}

export default Signup;
