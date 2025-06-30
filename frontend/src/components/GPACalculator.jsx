import React, { useState } from "react";

const GPACalculator = () => {
  const [courses, setCourses] = useState([
    { name: "", credits: "", gradePoint: "" },
  ]);
  const [gpa, setGpa] = useState(null);

  const handleChange = (index, field, value) => {
    const newCourses = [...courses];
    newCourses[index][field] = value;
    setCourses(newCourses);
  };

  const addCourse = () => {
    setCourses([...courses, { name: "", credits: "", gradePoint: "" }]);
  };

  const removeCourse = (index) => {
    const newCourses = [...courses];
    newCourses.splice(index, 1);
    setCourses(newCourses);
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach((course) => {
      const points = parseFloat(course.gradePoint) || 0;
      const credits = parseFloat(course.credits) || 0;
      totalPoints += points * credits;
      totalCredits += credits;
    });

    const calculatedGpa =
      totalCredits === 0 ? 0 : (totalPoints / totalCredits).toFixed(2);
    setGpa(calculatedGpa);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">GPA Calculator</h1>

      {courses.map((course, index) => (
        <div key={index} className="flex items-center gap-2 mb-2">
          <input
            type="text"
            placeholder="Subject Name"
            value={course.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
            className="border p-1"
          />

          <select
            value={course.credits}
            onChange={(e) => handleChange(index, "credits", e.target.value)}
            className="border p-1"
          >
            <option value="">Credit Hrs</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>

          <select
            value={course.gradePoint}
            onChange={(e) => handleChange(index, "gradePoint", e.target.value)}
            className="border p-1"
          >
            <option value="">GPA Obtained</option>
            <option value="4.0">4.0</option>
            <option value="3.5">3.5</option>
            <option value="3.0">3.0</option>
            <option value="2.5">2.5</option>
            <option value="2.0">2.0</option>
            <option value="0.0">0.0</option>
          </select>

          <button
            onClick={() => removeCourse(index)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}

      <div className="mt-4">
        <button
          onClick={addCourse}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Add Course
        </button>
        <button
          onClick={calculateGPA}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Calculate GPA
        </button>
      </div>

      {gpa !== null && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Your GPA is: {gpa}</h2>
        </div>
      )}

      <div className="mt-6">
        <h3 className="font-bold mb-2">IMS Grading Scale</h3>
        <table className="border border-collapse">
          <thead>
            <tr>
              <th className="border px-2 py-1">Marks (%)</th>
              <th className="border px-2 py-1">Grade Points</th>
              <th className="border px-2 py-1">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">91-100</td>
              <td className="border px-2 py-1">4.0</td>
              <td className="border px-2 py-1">A+</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">87-90</td>
              <td className="border px-2 py-1">4.0</td>
              <td className="border px-2 py-1">A</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">80-86</td>
              <td className="border px-2 py-1">3.5</td>
              <td className="border px-2 py-1">B+</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">72-79</td>
              <td className="border px-2 py-1">3.0</td>
              <td className="border px-2 py-1">B</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">66-71</td>
              <td className="border px-2 py-1">2.5</td>
              <td className="border px-2 py-1">C+</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">60-65</td>
              <td className="border px-2 py-1">2.0</td>
              <td className="border px-2 py-1">C</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Below 60</td>
              <td className="border px-2 py-1">0.0</td>
              <td className="border px-2 py-1">F</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GPACalculator;
