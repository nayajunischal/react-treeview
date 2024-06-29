import React from "react";
import { useSelection } from '@/context/SelectionContext';

export default function TechBlog() {
    const { highlighted } = useSelection();

    const getHighlightClass = (item: string) => (highlighted === item ? "bg-yellow-200" : "");

    return (
        <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Exploring the Tech Department</h1>
            <p className={`mb-2 ${getHighlightClass("TECH")}`}>
                The <strong>TECH</strong> department is a cornerstone of our organization, driving innovation and maintaining essential systems. Below, we explore the key components that make up this vital team:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li className={`mb-2 ${getHighlightClass("Company Maintenance")}`}>
                    <strong>Company Maintenance</strong>: This team ensures that all technological infrastructures are up-to-date and running smoothly. Their proactive approach helps prevent downtime and maintain high productivity levels.
                </li>
                <li className={`mb-2 ${getHighlightClass("Employees")}`}>
                    <strong>Employees</strong>:
                    <ul className={`list-disc list-inside ml-5 mb-2`}>
                        <li className={getHighlightClass("Reports")}><strong>Reports</strong>: The Reports section is crucial for data analysis and decision-making. It includes:</li>
                        <ul className="list-disc list-inside ml-5">
                            <li className={getHighlightClass("Report1")}><strong>Report1</strong>: Focuses on daily operations and metrics.</li>
                            <li className={getHighlightClass("Report2")}><strong>Report2</strong>: Provides insights into project developments.</li>
                            <li className={getHighlightClass("Report3")}><strong>Report3</strong>: Analyzes long-term trends and forecasts.</li>
                        </ul>
                        <li className={getHighlightClass("Employee Maint.")}><strong>Employee Maint.</strong>: This team supports staff with technological issues and ensures that everyone is equipped with the necessary tools to succeed.</li>
                    </ul>
                </li>
            </ul>
            <p className={`mb-2 ${getHighlightClass("Human Resources")}`}>
                Lastly, <strong>Human Resources</strong> plays a pivotal role in managing our most valuable assets—our people. They collaborate closely with the tech department to address employee needs and enhance workplace efficiency.
            </p>
        </div>
    );
}
