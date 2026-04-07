import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} TMS &mdash; Transportation Management System</p>
    </footer>
  );
}

export default Footer;
