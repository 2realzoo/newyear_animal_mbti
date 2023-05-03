import "./header.css";

function Header() {
  return (
    <div className="header_wrapper">
      <h2 className="header_title">
        <a href="/">성격으로 보는 새해 나의 동물</a>
      </h2>
      <div className="header_logo">
        <a
          href="https://2realzoo.tistory.com/"
          target="_blank"
          rel="noreferrer">
          2realzoo
        </a>
      </div>
    </div>
  );
}

export default Header;
