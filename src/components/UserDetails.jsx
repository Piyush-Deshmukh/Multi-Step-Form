const UserDetails = ({ user }) => {
    const {
        email, 
        password, 
        firstName,
        lastName,
        username,
        nationality,
        course
    } = user;

  return (
    <div className="user-details">
        <h1>User Details</h1>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Username: {username}</p>
        <p>Nationality: {nationality}</p>
        <p>Course: {course}</p>
    </div>
  )
}
export default UserDetails