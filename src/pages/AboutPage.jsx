import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "@/components/ui/imgg";

const AboutPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-orange-600">
        About Us
      </h1>

      <Image
        src="https://plus.unsplash.com/premium_photo-1671069847966-6a8016761245?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Springdale Public School"
      />

      <Section title="History">
        <p className="text-lg">
          Founded in 1985, Springdale Public School has been dedicated to
          providing quality education and holistic development to students.
        </p>
      </Section>

      <Section title="Vision">
        <p className="text-lg">
          To create a learning environment that fosters academic excellence,
          critical thinking, and ethical values.
        </p>
      </Section>

      <Section title="Mission">
        <p className="text-lg">
          To empower students with the knowledge, skills, and values needed to
          thrive in a dynamic world.
        </p>
      </Section>

      <Section title="Message from the Principal">
        <Card className="p-6 pb-4 bg-gray-100 border border-gray-200 rounded-lg shadow-sm">
          <CardContent>
            <p className="text-lg italic">
              " At Springdale, we believe in nurturing the potential of every
              student and guiding them towards a successful future."
            </p>
          </CardContent>
        </Card>
      </Section>

      <Section title="Infrastructure and Facilities">
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-lg">
            State-of-the-art science and computer labs
          </li>
          <li className="text-lg">Spacious and well-equipped classrooms</li>
          <li className="text-lg">
            Library with a vast collection of books and digital resources
          </li>
          <li className="text-lg">
            Sports facilities including a playground, gymnasium, and swimming
            pool
          </li>
        </ul>
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

export default AboutPage;
