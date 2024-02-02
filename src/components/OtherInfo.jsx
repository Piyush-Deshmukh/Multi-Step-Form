import { Form } from "react-bootstrap";

const OtherInfo = ({formData, setFormData}) => {
  return (
    <Form.Group className="other-info-container">
      <Form.Label>Country</Form.Label>
      <Form.Control
        type="text"
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
        required
      />
      <Form.Label>Course</Form.Label>
      <Form.Control
        type="text"
        value={formData.course}
        onChange={(e) => {
          setFormData({ ...formData, course: e.target.value });
        }}
        required
      />
    </Form.Group>
  )
}
export default OtherInfo