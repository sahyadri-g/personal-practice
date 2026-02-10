// Problem 1: UserExperience.jsx
// Statement: Show user experience using start year.
// Use: Calculate value from props (no state)
// Behavior:
// Input: name, startYear
// Output: experience text
// Example: name="Sandesh", startYear=2024 → Sandesh has 2 years of experience 

function UserExperience(props) {
  const { name, startYear } = props;

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const exp = currentYear - startYear;

  return (
    <div>
      {name} has {exp} years of experience
    </div>
  );
}

export default UserExperience;
