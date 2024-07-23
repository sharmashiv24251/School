import React from "react";
import { Card } from "@/components/ui/card";
import Image from "@/components/ui/imgg";

const AcademicsPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-orange-600">
        Academics
      </h1>
      <Image
        src="https://plus.unsplash.com/premium_photo-1671069847966-6a8016761245?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Academics at Springdale Public School"
      />

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Curriculum</h2>
        <Card className="p-6 bg-gray-100 border border-gray-200 rounded-lg shadow-sm">
          <CurriculumSection
            title="Primary (Grades 1-5)"
            subjects={[
              "English",
              "Mathematics",
              "Science",
              "Social Studies",
              "Art",
              "Physical Education",
            ]}
          />
          <CurriculumSection
            title="Secondary (Grades 6-10)"
            subjects={[
              "English",
              "Mathematics",
              "Science (Physics, Chemistry, Biology)",
              "Social Studies",
              "Computer Science",
              "Physical Education",
              "Art",
            ]}
          />
          <CurriculumSection
            title="Senior Secondary (Grades 11-12)"
            subjects={[
              {
                stream: "Science Stream",
                subjects: [
                  "Physics",
                  "Chemistry",
                  "Biology",
                  "Mathematics",
                  "Computer Science",
                  "English",
                ],
              },
              {
                stream: "Commerce Stream",
                subjects: [
                  "Accountancy",
                  "Business Studies",
                  "Economics",
                  "Mathematics",
                  "English",
                ],
              },
            ]}
          />
        </Card>
      </section>

      <Section title="Teaching Methodologies">
        <p className="text-lg">
          We use a blend of traditional and modern teaching techniques to cater
          to different learning styles.
        </p>
      </Section>

      <Section title="Educational Resources">
        <p className="text-lg">
          Digital classrooms, interactive learning modules, and access to online
          educational platforms.
        </p>
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-3xl font-semibold mb-4">{title}</h2>
    {children}
  </section>
);

const CurriculumSection = ({ title, subjects }) => (
  <>
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <ul className="list-disc pl-5 space-y-2 mb-5">
      {subjects.map((subject, index) => {
        // Check if the subject is an object (for streams)
        if (typeof subject === "object") {
          return (
            <li key={index} className="text-lg">
              <strong>{subject.stream}:</strong> {subject.subjects.join(", ")}
            </li>
          );
        }
        // Otherwise, it's a string subject
        return (
          <li key={index} className="text-lg">
            {subject}
          </li>
        );
      })}
    </ul>
  </>
);

export default AcademicsPage;
