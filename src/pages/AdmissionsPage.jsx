import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AdmissionsPage = () => {
  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(generateAdmissionForm());
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const generateAdmissionForm = () => `
    <html>
      <head>
        <title>Admission Form</title>
        <style>
          ${getAdmissionFormStyles()}
        </style>
      </head>
      <body>
        <h1>Admission Form</h1>
        ${getAdmissionFormFields()}
        <button onclick="window.print()">Print Form</button>
      </body>
    </html>
  `;

  const getAdmissionFormStyles = () => `
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      padding: 20px;
      border: 1px solid #ccc;
    }
    h1, h2 {
      color: #FF4500; /* Orange color */
    }
    .form-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input, textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      background-color: #FF4500;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #e03e00;
    }
  `;

  const getAdmissionFormFields = () => `
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
    </div>
    <div class="form-group">
      <label for="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" required />
    </div>
    <div class="form-group">
      <label for="address">Address:</label>
      <textarea id="address" name="address" rows="4" required></textarea>
    </div>
    <div class="form-group">
      <label for="grade">Grade Applying For:</label>
      <input type="text" id="grade" name="grade" required />
    </div>
  `;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-orange-600">
        Admissions
      </h1>

      <Section title="Admission Process">
        <p className="text-lg mb-4">
          Admission forms are available for download. Submit the completed form
          along with required documents at the school office.
        </p>
        <Button
          as="a"
          onClick={handlePrint}
          href="/path/to/admission-form.pdf" // Update with the actual path to your form
          download
          className="bg-orange-600 text-white hover:bg-orange-700 px-4 py-2 rounded"
        >
          Download Admission Form
        </Button>
      </Section>

      <Section title="Admission Criteria">
        <p className="text-lg">
          Admission is based on merit and availability of seats. Entrance tests
          may be conducted for certain grades.
        </p>
      </Section>

      <Section title="Important Dates">
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-lg">
            Admission Form Availability: <strong>March 1st</strong>
          </li>
          <li className="text-lg">
            Last Date for Submission: <strong>March 31st</strong>
          </li>
          <li className="text-lg">
            Entrance Test: <strong>April 15th</strong>
          </li>
          <li className="text-lg">
            Announcement of Results: <strong>April 30th</strong>
          </li>
        </ul>
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

export default AdmissionsPage;
