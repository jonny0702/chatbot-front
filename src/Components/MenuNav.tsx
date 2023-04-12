import "../styles/MenuNav.sass"

export const MenuNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
        <a className="navbar-brand" href="#">
          ChatBot👾
        </a>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="https://github.com/jonny0702">
              GitHub
            </a>
          </li>
        </ul>
    </nav>
  );
};
