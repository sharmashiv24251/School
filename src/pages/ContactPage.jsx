import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormData, clearFormData } from "../store/store";
import { Card } from "@/components/ui/card";

const ContactPage = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);
  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ ...formData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted:", formData);
      dispatch(clearFormData()); // Clear form data after submission
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-orange-600">
        Contact Us
      </h1>

      <Section title="Contact Information">
        <p className="text-lg mb-2">
          Address:{" "}
          <strong>
            Springdale Public School, 123 Education Lane, Cityville, State, ZIP
            Code
          </strong>
        </p>
        <p className="text-lg mb-2">
          Phone: <strong>+1 (123) 456-7890</strong>
        </p>
        <p className="text-lg mb-4">
          Email: <strong>info@springdale.edu</strong>
        </p>
      </Section>

      <Section title="Contact Form">
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            error={errors.name}
          />
          <FormField
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            error={errors.email}
          />
          <FormField
            name="message"
            as="textarea"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            error={errors.message}
          />
          <button
            type="submit"
            className="bg-orange-600 text-white hover:bg-orange-700 p-2 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </Section>

      <Section title="Our Location">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2221781715047!2d-71.05829168447468!3d42.36008227918657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37056f5e0a51d%3A0x75b57f6b5f0e03b1!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1625661193520!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full border-none"
          ></iframe>
        </div>
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-3xl font-semibold mb-4">{title}</h2>
    <Card className="p-6 bg-gray-100 border border-gray-200 rounded-lg shadow-sm">
      {children}
    </Card>
  </section>
);

const FormField = ({
  name,
  type = "text",
  as,
  value,
  onChange,
  placeholder,
  error,
  ...props
}) => (
  <div>
    {as === "textarea" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded-lg"
        {...props}
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded-lg"
        {...props}
      />
    )}
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default ContactPage;
