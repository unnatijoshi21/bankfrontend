import React from "react";

const Home = () => {
      return (
            <div style={styles.container}>
                <h2>Welcome to Deloitted Bank</h2>
                <p>Your trusted partner in financial growth and security.</p>    </div>  );
};

const styles = {
    container: {
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
        },
};

export default Home;