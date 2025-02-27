function Projects() {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Projects</h2>
      <div className="project">
        <div className="project-text">
          <h3>BMI Calculator</h3>
          <p>
            Project One: BMI Calculator I created a BMI Calculator that takes a
            user’s weight and height as input and calculates their Body Mass
            Index (BMI). Based on the result, the calculator determines whether
            the user falls into categories like underweight, healthy weight,
            overweight, or obese. The project was focused on user-friendly input
            handling and providing clear feedback on health status. It was a
            great exercise in logic, input validation, and conditional
            statements.
          </p>
        </div>
        <div className="project-image">
          <img src="/bmicalc.png" alt="Project One" />
        </div>
      </div>
      <div className="project">
        <div className="project-text">
          <h3>Job Finder</h3>
          <p>
            I developed a Job Finder application that integrates with the Jobicy
            API to help users search for job listings across different
            industries. The app allows users to filter job postings by
            categories such as HR, Business, and Developer, making it easier to
            find relevant positions. This project involved working with API
            requests, data handling, and user interface filtering, ensuring a
            smooth and efficient job search experience.
          </p>
        </div>
        <div className="project-image">
          <img src="/jobfindrdev.png" alt="Project Two" />
        </div>
      </div>

      <div className="project">
        <div className="project-text">
          <h3>Rudimentary Python Showcase</h3>
          <p>
            I built a simple calculator in Python that used predefined variables
            for calculations and displayed the results using f-strings. Instead
            of taking user input, the program performed operations on set values
            and formatted the output neatly in the console. This project was a
            good exercise in basic arithmetic operations, variable handling, and
            string formatting while keeping the code clean and readable.
          </p>
        </div>
        <div className="project-image">
          <img src="/pythonoutput.png" alt="Project Three" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
