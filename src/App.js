import React, { useState } from 'react';

function ProfileCard({ name, image, description }) {
  return (
    <div className="profile-card" style={cardStyle}>
      <img src={image} alt={name} style={imageStyle} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

function BlogCard({ title, description, imageURL }) {
  return (
    <div className="blog-card" style={cardStyle}>
      <img src={imageURL} alt={title} style={imageStyle} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.firstName) {
      isValid = false;
      tempErrors['firstName'] = 'First name is required.';
    }

    if (!formData.lastName) {
      isValid = false;
      tempErrors['lastName'] = 'Last name is required.';
    }

    if (!formData.email) {
      isValid = false;
      tempErrors['email'] = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      tempErrors['email'] = 'Email is not valid.';
    }

    if (!formData.password) {
      isValid = false;
      tempErrors['password'] = 'Password is required.';
    }

    if (!formData.confirmPassword) {
      isValid = false;
      tempErrors['confirmPassword'] = 'Confirm password is required.';
    } else if (formData.password !== formData.confirmPassword) {
      isValid = false;
      tempErrors['confirmPassword'] = 'Passwords do not match.';
    }

    if (!formData.dateOfBirth) {
      isValid = false;
      tempErrors['dateOfBirth'] = 'Date of birth is required.';
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: '',
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div>
        <label>First Name:</label><br />
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <div style={errorStyle}>{errors.firstName}</div>
      </div>
      <div>
        <label>Last Name:</label><br />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <div style={errorStyle}>{errors.lastName}</div>
      </div>
      <div>
        <label>Email:</label><br />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <div style={errorStyle}>{errors.email}</div>
      </div>
      <div>
        <label>Password:</label><br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <div style={errorStyle}>{errors.password}</div>
      </div>
      <div>
        <label>Confirm Password:</label><br />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <div style={errorStyle}>{errors.confirmPassword}</div>
      </div>
      <div>
        <label>Date of Birth:</label><br />
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
        <div style={errorStyle}>{errors.dateOfBirth}</div>
      </div>
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

function App() {
  return (
    <div className="App" style={appStyle}>
      <h1>Profile Card</h1>
      <ProfileCard
        name="John Doe"
        image="https://via.placeholder.com/100"
        description="Software Developer at XYZ Company."
      />

      <h1>Blog Card</h1>
      <BlogCard
        title="Understanding React Props"
        description="A brief introduction to props in React and how to use them effectively."
        imageURL="https://via.placeholder.com/300x200"
      />

      <h1>Registration Form</h1>
      <RegistrationForm />
    </div>
  );
}

const appStyle = {
  fontFamily: 'Arial, sans-serif',
  margin: '20px',
};

const cardStyle = {
  border: '1px solid #ccc',
  padding: '15px',
  marginBottom: '20px',
  borderRadius: '5px',
  maxWidth: '400px',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
};

const formStyle = {
  maxWidth: '400px',
};

const errorStyle = {
  color: 'red',
  fontSize: '12px',
};

export default App;
