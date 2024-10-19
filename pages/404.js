const Custom404 = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    color: '#333',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  message: {
    margin: '1rem 0',
    fontSize: '1.25rem',
  },
  link: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#0070f3',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
};

export default Custom404;
