import { Form } from "react-bootstrap";

const PersonalInfo = ({formData, setFormData}) => {
  return (
    <Form.Group className="personal-info-container">
      <Form.Label>First Name</Form.Label>
      <Form.Control
        type="text"
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
        required
      />
      <Form.Label>Last Name</Form.Label>
      <Form.Control
        type="text"
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
        required
      />
      <Form.Label>Username</Form.Label>
      <Form.Control
        type="text"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
        required
      />
    </Form.Group>
  )
}
export default PersonalInfo