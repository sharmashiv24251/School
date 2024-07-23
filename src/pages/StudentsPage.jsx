import React from "react";
import { Card } from "@/components/ui/card";
import Image from "@/components/ui/imgg";

const StudentsPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-orange-600">
        Student Life at Springdale
      </h1>

      <Image
        src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Student Life"
      />

      <Section title="Extracurricular Activities">
        <p className="text-lg">
          Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club
        </p>
      </Section>

      <Section title="Clubs and Societies">
        <p className="text-lg">
          Literary Society, Environmental Club, Astronomy Club, Coding Club
        </p>
      </Section>

      <Section title="Achievements and Accolades">
        <p className="text-lg">
          Our students consistently excel in various competitions and exams.
          They have won accolades in regional and national-level events across
          different fields including academics, sports, and arts.
        </p>
      </Section>

      <Section title="Student Council and Leadership Opportunities">
        <p className="text-lg">
          The Student Council provides an excellent platform for students to
          develop leadership skills and participate in decision-making
          processes. Leadership opportunities are available through various
          council positions and student-led initiatives.
        </p>
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

export default StudentsPage;
