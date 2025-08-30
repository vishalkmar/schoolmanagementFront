import { useSelector } from 'react-redux';

const AdminProfile = () => {
    const { currentUser } = useSelector((state) => state.user);

    return (
        <div
            style={{
                maxWidth: "400px",
                margin: "40px auto",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                fontFamily: "Arial, sans-serif",
                backgroundColor: "#f9f9f9",
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#270843" }}>
                Admin Profile
            </h2>
            <p style={{ margin: "10px 0", fontSize: "16px" }}>
                <strong>Name:</strong> {currentUser?.name}
            </p>
            <p style={{ margin: "10px 0", fontSize: "16px" }}>
                <strong>Email:</strong> {currentUser?.email}
            </p>
            <p style={{ margin: "10px 0", fontSize: "16px" }}>
                <strong>School:</strong> {currentUser?.schoolName}
            </p>
        </div>
    );
};

export default AdminProfile;

// commented edit & delete part ko touch nahi kiya
