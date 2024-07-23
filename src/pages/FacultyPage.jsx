import React from "react";
import { Card } from "@/components/ui/card";
const facultyMembers = [
  {
    name: "John Doe",
    position: "Principal",
    qualifications: "M.Ed",
    experience: "20 years of experience in educational administration",
  },
  {
    name: "Jane Smith",
    position: "Vice Principal",
    qualifications: "M.Sc. in Physics",
    experience: "15 years of teaching experience",
  },
  {
    name: "Emily Johnson",
    position: "English Teacher",
    qualifications: "M.A. in English",
    experience: "10 years of teaching experience",
  },
  {
    name: "Michael Brown",
    position: "Mathematics Teacher",
    qualifications: "M.Sc. in Mathematics",
    experience: "8 years of teaching experience",
  },
  {
    name: "Sophia Davis",
    position: "Science Teacher",
    qualifications: "M.Sc. in Chemistry",
    experience: "12 years of teaching experience",
  },
  {
    name: "David Wilson",
    position: "Computer Science Teacher",
    qualifications: "B.Tech in Computer Science",
    experience: "5 years of teaching experience",
  },
];

const FacultyPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-orange-600">
        Faculty
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {facultyMembers.map((member, index) => (
          <FacultyCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

const FacultyCard = ({ member }) => (
  <Card className="p-6 bg-gray-100 border border-gray-200 rounded-lg shadow-sm">
    <h2 className="text-2xl font-semibold mb-2 text-orange-500">
      {member.name}
    </h2>
    <p className="text-lg font-semibold mb-1">{member.position}</p>
    <p className="text-sm mb-2">
      <strong>Qualifications:</strong> {member.qualifications}
    </p>
    <p className="text-sm">
      <strong>Experience:</strong> {member.experience}
    </p>
  </Card>
);

export default FacultyPage;
