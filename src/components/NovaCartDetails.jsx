import { useNavigate } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

function NovaCartDetails() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <button onClick={() => navigate(-1)} style={styles.backBtn}>
        <FaArrowLeft style={{ marginRight: "8px" }} /> Back
      </button>

      {/* الفقرة 1 */}
      <section style={styles.section}>
        <h2 style={styles.title}>NovaCart – Full Stack E-commerce Platform</h2>
        <p style={styles.text}>
          NovaCart is a modern full-stack e-commerce platform developed to provide a complete online shopping experience for both customers and administrators. The project focuses on performance, security, and scalability while delivering a responsive and user-friendly interface across all devices.<br/><br/>
          The frontend was built using React.js to create a fast and interactive user experience, while the backend was developed with Flask and REST APIs to handle business logic and data management. The application includes secure authentication using JWT, password encryption, CORS protection, and a structured database architecture to ensure reliable and secure communication between the client and the server.<br/><br/>
          <strong>Technologies Used:</strong><br/>
          React.js, JavaScript (ES6+), Flask, Python, SQLAlchemy, MySQL, REST API, JWT Authentication, Flask-CORS, Password Hashing, Bootstrap, Git & GitHub.
        </p>
        <img src="/commerce.png" style={styles.image} onError={(e) => {e.target.style.display = 'none'}} />
        <hr style={styles.divider} />
      </section>

      {/* الفقرة 2 */}
      <section style={styles.section}>
        <h2 style={styles.title}>Powerful Admin Dashboard</h2>
        <p style={styles.text}>
          The platform includes a comprehensive administrative dashboard that enables efficient management of products, users, orders, and inventory. It provides administrators with complete control over the entire system through a clean and intuitive interface, making daily operations faster, more organized, and easier to manage.
        </p>
        <img src="/Dashboard.png" style={styles.image} onError={(e) => {e.target.style.display = 'none'}} />
        <hr style={styles.divider} />
      </section>

      {/* الفقرة 3 */}
      <section style={styles.section}>
        <h2 style={styles.title}>Wishlist Management</h2>
        <p style={styles.text}>
          Users can save their favorite products to a personalized wishlist for future purchases. This feature enhances the shopping experience by allowing customers to quickly access products they are interested in without searching again.
        </p>
        <img src="/Wishlist.png" style={styles.image} onError={(e) => {e.target.style.display = 'none'}} />
        <hr style={styles.divider} />
      </section>

      {/* الفقرة 4 */}
      <section style={styles.section}>
        <h2 style={styles.title}>Smart Shopping Cart</h2>
        <p style={styles.text}>
          The shopping cart provides a smooth and user-friendly experience by allowing customers to add, update, or remove products before checkout. It automatically calculates totals and keeps the selected items organized throughout the shopping journey.
        </p>
        <img src="/Cart.png" style={styles.image} onError={(e) => {e.target.style.display = 'none'}} />
        <hr style={styles.divider} />
      </section>

      {/* الفقرة 5 */}
      <section style={styles.section}>
        <h2 style={styles.title}>Advanced Product Search</h2>
        <p style={styles.text}>
          The application features a fast and efficient search system that helps users quickly find products by name. This improves navigation and allows customers to discover items with minimal effort, creating a seamless shopping experience.
        </p>
        <img src="/Search.png" style={styles.image} onError={(e) => {e.target.style.display = 'none'}} />
        <hr style={styles.divider} />
      </section>

      {/* الفقرة 6 */}
      <section style={styles.section}>
        <h2 style={styles.title}>Secure Checkout Process</h2>
        <p style={styles.text}>
          The checkout system is designed to provide a secure and straightforward purchasing experience. Customers can review their orders, enter shipping information, choose their preferred payment method, and complete purchases through a structured and protected workflow.
        </p>
        <img src="/Checkout.png" style={styles.image} onError={(e) => {e.target.style.display = 'none'}} />
        <hr style={styles.divider} />
      </section>


    </div>
  );
}

const styles = {
  container: { maxWidth: "900px", margin: "0 auto", padding: "80px 20px", color: "white" },
  backBtn: { background: "transparent", border: "1px solid #38bdf8", color: "#38bdf8", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", marginBottom: "40px", display: "flex", alignItems: "center" },
  section: { marginBottom: "60px" },
  title: { color: "#38bdf8", fontSize: "32px", marginBottom: "15px" },
  text: { fontSize: "18px", lineHeight: "1.8", color: "#cbd5e1", marginBottom: "20px" },
  image: { width: "100%", borderRadius: "15px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" },
  divider: { border: "0", borderTop: "1px solid #334155", margin: "60px 0" }
};

export default NovaCartDetails;