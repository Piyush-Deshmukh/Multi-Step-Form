import { Form } from "react-bootstrap";

const SignUpInfo = ({formData, setFormData, setShow}) => {
  return (
    <Form.Group className="sign-up-container">
      <Form.Label>Email</Form.Label>
      <Form.Control
        type="email"
        value={formData.email}
        onChange={(event) => {
          setFormData({ ...formData, email: event.target.value })
          setShow(false)
        }}
        required
      />
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        value={formData.password}
        onChange={(event) => {
          setFormData({ ...formData, password: event.target.value })
          setShow(false)
        }}
        required
      />
    </Form.Group>
  );
};
export default SignUpInfo;
