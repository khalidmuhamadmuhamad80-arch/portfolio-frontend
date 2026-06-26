import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams(); // لاستقبال الـ id من الرابط

  return (
    <div style={{ padding: "100px 20px", textAlign: "center", color: "white" }}>
      <h1>Project Details</h1>
      <p style={{ fontSize: "20px" }}>Welcome to the project page: {id}</p>
      <h2 style={{ color: "#38bdf8", marginTop: "20px" }}>Mohamed Khaled</h2>
    </div>
  );
}

export default ProjectDetails;