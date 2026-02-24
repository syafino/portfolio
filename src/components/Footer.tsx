const Footer = () => {
  return (
    <footer style={{ padding: '32px 24px', borderTop: '1px solid #e0e0e0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: 14, color: '#888' }}>
          © {new Date().getFullYear()} Syafino Yunalfian
        </p>
      </div>
    </footer>
  );
};

export default Footer;
