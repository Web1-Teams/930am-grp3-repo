const Login=()=>{
    return(
        <div
        className="form"
        id="login-form"
        style={{
          maxWidth: "400px",
          margin: "50px auto",
          padding: "20px",
          background: "#FFFBF5",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h3 style={{ marginBottom: "10px", fontSize: "1.5em", color: "#333" }}>
          You have an account?
        </h3>

        <p style={{ marginBottom: "20px", fontSize: "0.9em", color: "#666" }}>
          Login to see whats going on at Rafeeq community
        </p>

        <form>
          <input
            type="email"
            placeholder="Email"
            required
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1em",
              boxSizing: "border-box",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1em",
              boxSizing: "border-box",
            }}
          />
          <button
            type="submit"
            className="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#7743DB",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "1em",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#5B33A6")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#7743DB")}
          >
            Login
          </button>
        </form>
      </div>
    )
}

export default Login
