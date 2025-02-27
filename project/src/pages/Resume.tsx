import React from 'react';

const Resume = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Resume</h2>
      
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-navy-600 mb-4">Work Experience</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium">Senior Software Engineer</h4>
              <p className="text-gray-600">Google</p>
              <p className="text-gray-500">2022 - Present</p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Led development of key features for Google Cloud Platform</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Improved system performance by 40%</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium">Software Engineer</h4>
              <p className="text-gray-600">Microsoft</p>
              <p className="text-gray-500">2020 - 2022</p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Developed and maintained Azure cloud services</li>
                <li>Implemented CI/CD pipelines</li>
                <li>Reduced deployment time by 60%</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-navy-600 mb-4">Certifications</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-medium">AWS Certified Solutions Architect</h4>
              <p className="text-gray-500">2023</p>
            </div>
            <div>
              <h4 className="text-xl font-medium">Google Cloud Professional Developer</h4>
              <p className="text-gray-500">2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;