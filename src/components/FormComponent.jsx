import { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import UserDetails from "./UserDetails";
import { Button, Container, Form, ProgressBar, Row } from "react-bootstrap";


const INITIAL_DATA = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  username: "",
  nationality: "",
  course: "",
};


const FormComponent = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [user, SetUser] = useState({});
  const [show, setShow] = useState(false);

  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} setShow={setShow} />
    } 
    else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } 
    else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  const clearEntries = () => {
    setFormData(INITIAL_DATA);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (page === FormTitles.length - 1) {
      setShow(true);
      SetUser(formData);
      console.log(formData);
      setPage(0);
      clearEntries();
    } else {
      setPage((currPage) => currPage + 1);
    }
  }

  const now = page === 0 ? 33.3 : page == 1 ? 66.6 : 100;


  return (
    <Container className="form-wrapper" style={{ height: '100vh', width: '90vw' }}>
      <Form className="form form-container shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        <div className="header text-center mb-5">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">
          {PageDisplay()}
        </div>
        <div className="footer mt-3">
          <Button
            className="btn btn-dark me-2"
            type="button"
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Previous
          </Button>
          <Button className="btn btn-dark me-2" type="submit">
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </Form>
      <div className="user-details-wrapper">
        {show && <UserDetails user={user} />}
      </div>
    </Container>
  )
}
export default FormComponent