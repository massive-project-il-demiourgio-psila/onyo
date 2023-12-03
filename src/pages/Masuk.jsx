import { Container } from "react-bootstrap";
import AuthForm from "../components/AuthFormComponent";

export default function Masuk() {
  return (
    <div className="auth-page">
      <Container className="custom-shadow animate__animated animate__fadeInUp">
        <AuthForm type="login" />
      </Container>
    </div>
  );
}
