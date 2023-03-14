import "./sidebar.scss";
import { NavLink, Link } from "react-router-dom";
import ButtonAddOrder from "../buttonAddOrder/ButtonAddOrder";
import ButtonPayment from "../buttonPayment/ButtonPayment";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Link to="/">
          <img src="/img/logo.svg" alt="logo" />
        </Link>
      </div>
      <nav className="sidebar__nav">
        <ul>
          <li>
            <NavLink to="results">
              <div className="nav__item">
                <div className="item__icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 14L3.5 14.07L8.07 9.5C7.89 8.85 8.06 8.11 8.59 7.59C9.37 6.8 10.63 6.8 11.41 7.59C11.94 8.11 12.11 8.85 11.93 9.5L14.5 12.07L15 12C15.18 12 15.35 12 15.5 12.07L19.07 8.5C19 8.35 19 8.18 19 8C19 7.46957 19.2107 6.96086 19.5858 6.58579C19.9609 6.21071 20.4696 6 21 6C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8C23 8.53043 22.7893 9.03914 22.4142 9.41421C22.0391 9.78929 21.5304 10 21 10C20.82 10 20.65 10 20.5 9.93L16.93 13.5C17 13.65 17 13.82 17 14C17 14.5304 16.7893 15.0391 16.4142 15.4142C16.0391 15.7893 15.5304 16 15 16C14.4696 16 13.9609 15.7893 13.5858 15.4142C13.2107 15.0391 13 14.5304 13 14L13.07 13.5L10.5 10.93C10.18 11 9.82 11 9.5 10.93L4.93 15.5L5 16C5 16.5304 4.78929 17.0391 4.41421 17.4142C4.03914 17.7893 3.53043 18 3 18C2.46957 18 1.96086 17.7893 1.58579 17.4142C1.21071 17.0391 1 16.5304 1 16C1 15.4696 1.21071 14.9609 1.58579 14.5858C1.96086 14.2107 2.46957 14 3 14V14Z"
                      fill="white"
                      fillOpacity="0.6"
                    />
                  </svg>
                </div>
                <div className="item__name">Итоги</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="orders">
              <div className="nav__item">
                <div className="item__icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_5612_5393)">
                      <path
                        d="M18 7.00009L16.59 5.59009L10.25 11.9301L11.66 13.3401L18 7.00009ZM22.24 5.59009L11.66 16.1701L7.48003 12.0001L6.07003 13.4101L11.66 19.0001L23.66 7.00009L22.24 5.59009ZM0.410034 13.4101L6.00003 19.0001L7.41003 17.5901L1.83003 12.0001L0.410034 13.4101Z"
                        fill="white"
                        fillOpacity="0.56"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5612_5393">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="item__name">Заказы</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="messages">
              <div className="nav__item">
                <div className="item__icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_5612_5401)">
                      <path
                        d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z"
                        fill="white"
                        fillOpacity="0.56"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5612_5401">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="item__name">Сообщения</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="calls">
              <div className="nav__item">
                <div className="item__icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_5614_1816)">
                      <path
                        d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z"
                        fill="white"
                        fillOpacity="0.56"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5614_1816">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="item__name">Звонки</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="people">
              <div className="nav__item">
                <div className="item__icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_5612_5417)">
                      <path
                        d="M9 13.75C6.66 13.75 2 14.92 2 17.25V19H16V17.25C16 14.92 11.34 13.75 9 13.75ZM4.34 17C5.18 16.42 7.21 15.75 9 15.75C10.79 15.75 12.82 16.42 13.66 17H4.34ZM9 12C10.93 12 12.5 10.43 12.5 8.5C12.5 6.57 10.93 5 9 5C7.07 5 5.5 6.57 5.5 8.5C5.5 10.43 7.07 12 9 12ZM9 7C9.83 7 10.5 7.67 10.5 8.5C10.5 9.33 9.83 10 9 10C8.17 10 7.5 9.33 7.5 8.5C7.5 7.67 8.17 7 9 7ZM16.04 13.81C17.2 14.65 18 15.77 18 17.25V19H22V17.25C22 15.23 18.5 14.08 16.04 13.81V13.81ZM15 12C16.93 12 18.5 10.43 18.5 8.5C18.5 6.57 16.93 5 15 5C14.46 5 13.96 5.13 13.5 5.35C14.13 6.24 14.5 7.33 14.5 8.5C14.5 9.67 14.13 10.76 13.5 11.65C13.96 11.87 14.46 12 15 12Z"
                        fill="white"
                        fillOpacity="0.56"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5612_5417">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="item__name">Контрагенты</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="documents">
              <div className="nav__item">
                <div className="item__icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_5612_5425)">
                      <path
                        d="M8 16H16V18H8V16ZM8 12H16V14H8V12ZM14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z"
                        fill="white"
                        fillOpacity="0.56"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5612_5425">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="item__name">Документы</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="performers">
              <div className="nav__item">
                <div className="item__icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_5612_5433)">
                      <path
                        d="M12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 15C14.7 15 17.8 16.29 18 17V18H6V17.01C6.2 16.29 9.3 15 12 15V15ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4V4ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13V13Z"
                        fill="white"
                        fillOpacity="0.6"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5612_5433">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="item__name">Исполнители</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="reports">
              <div className="nav__item">
                <div className="item__icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6C20.58 6 21.05 6.2 21.42 6.59C21.8 7 22 7.45 22 8V19C22 19.55 21.8 20 21.42 20.41C21.05 20.8 20.58 21 20 21H4C3.42 21 2.95 20.8 2.58 20.41C2.2 20 2 19.55 2 19V8C2 7.45 2.2 7 2.58 6.59C2.95 6.2 3.42 6 4 6H8V4C8 3.42 8.2 2.95 8.58 2.58C8.95 2.2 9.42 2 10 2H14C14.58 2 15.05 2.2 15.42 2.58C15.8 2.95 16 3.42 16 4V6H20ZM4 8V19H20V8H4ZM14 6V4H10V6H14Z"
                      fill="white"
                      fillOpacity="0.6"
                    />
                  </svg>
                </div>
                <div className="item__name">Отчеты</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="base">
              <div className="nav__item">
                <div className="item__icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_5612_5448)">
                      <path
                        d="M12 9C14.21 9 16 7.21 16 5C16 2.79 14.21 1 12 1C9.79 1 8 2.79 8 5C8 7.21 9.79 9 12 9ZM12 3C13.1 3 14 3.9 14 5C14 6.1 13.1 7 12 7C10.9 7 10 6.1 10 5C10 3.9 10.9 3 12 3ZM12 11.55C9.64 9.35 6.48 8 3 8V19C6.48 19 9.64 20.35 12 22.55C14.36 20.36 17.52 19 21 19V8C17.52 8 14.36 9.35 12 11.55ZM19 17.13C16.47 17.47 14.07 18.43 12 19.95C9.94 18.43 7.53 17.46 5 17.12V10.17C7.1 10.55 9.05 11.52 10.64 13L12 14.28L13.36 13.01C14.95 11.53 16.9 10.56 19 10.18V17.13V17.13Z"
                        fill="white"
                        fillOpacity="0.6"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5612_5448">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="item__name">Базы данных</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="settings">
              <div className="nav__item">
                <div className="item__icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_5612_5456)">
                      <path
                        d="M19.4289 12.98C19.4689 12.66 19.4989 12.34 19.4989 12C19.4989 11.66 19.4689 11.34 19.4289 11.02L21.5389 9.37C21.7289 9.22 21.7789 8.95 21.6589 8.73L19.6589 5.27C19.5689 5.11 19.3989 5.02 19.2189 5.02C19.1589 5.02 19.0989 5.03 19.0489 5.05L16.5589 6.05C16.0389 5.65 15.4789 5.32 14.8689 5.07L14.4889 2.42C14.4589 2.18 14.2489 2 13.9989 2H9.99886C9.74886 2 9.53886 2.18 9.50886 2.42L9.12886 5.07C8.51886 5.32 7.95886 5.66 7.43886 6.05L4.94886 5.05C4.88886 5.03 4.82886 5.02 4.76886 5.02C4.59886 5.02 4.42886 5.11 4.33886 5.27L2.33886 8.73C2.20886 8.95 2.26886 9.22 2.45886 9.37L4.56886 11.02C4.52886 11.34 4.49886 11.67 4.49886 12C4.49886 12.33 4.52886 12.66 4.56886 12.98L2.45886 14.63C2.26886 14.78 2.21886 15.05 2.33886 15.27L4.33886 18.73C4.42886 18.89 4.59886 18.98 4.77886 18.98C4.83886 18.98 4.89886 18.97 4.94886 18.95L7.43886 17.95C7.95886 18.35 8.51886 18.68 9.12886 18.93L9.50886 21.58C9.53886 21.82 9.74886 22 9.99886 22H13.9989C14.2489 22 14.4589 21.82 14.4889 21.58L14.8689 18.93C15.4789 18.68 16.0389 18.34 16.5589 17.95L19.0489 18.95C19.1089 18.97 19.1689 18.98 19.2289 18.98C19.3989 18.98 19.5689 18.89 19.6589 18.73L21.6589 15.27C21.7789 15.05 21.7289 14.78 21.5389 14.63L19.4289 12.98V12.98ZM17.4489 11.27C17.4889 11.58 17.4989 11.79 17.4989 12C17.4989 12.21 17.4789 12.43 17.4489 12.73L17.3089 13.86L18.1989 14.56L19.2789 15.4L18.5789 16.61L17.3089 16.1L16.2689 15.68L15.3689 16.36C14.9389 16.68 14.5289 16.92 14.1189 17.09L13.0589 17.52L12.8989 18.65L12.6989 20H11.2989L11.1089 18.65L10.9489 17.52L9.88886 17.09C9.45886 16.91 9.05886 16.68 8.65886 16.38L7.74886 15.68L6.68886 16.11L5.41886 16.62L4.71886 15.41L5.79886 14.57L6.68886 13.87L6.54886 12.74C6.51886 12.43 6.49886 12.2 6.49886 12C6.49886 11.8 6.51886 11.57 6.54886 11.27L6.68886 10.14L5.79886 9.44L4.71886 8.6L5.41886 7.39L6.68886 7.9L7.72886 8.32L8.62886 7.64C9.05886 7.32 9.46886 7.08 9.87886 6.91L10.9389 6.48L11.0989 5.35L11.2989 4H12.6889L12.8789 5.35L13.0389 6.48L14.0989 6.91C14.5289 7.09 14.9289 7.32 15.3289 7.62L16.2389 8.32L17.2989 7.89L18.5689 7.38L19.2689 8.59L18.1989 9.44L17.3089 10.14L17.4489 11.27ZM11.9989 8C9.78886 8 7.99886 9.79 7.99886 12C7.99886 14.21 9.78886 16 11.9989 16C14.2089 16 15.9989 14.21 15.9989 12C15.9989 9.79 14.2089 8 11.9989 8ZM11.9989 14C10.8989 14 9.99886 13.1 9.99886 12C9.99886 10.9 10.8989 10 11.9989 10C13.0989 10 13.9989 10.9 13.9989 12C13.9989 13.1 13.0989 14 11.9989 14Z"
                        fill="white"
                        fillOpacity="0.56"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5612_5456">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="item__name">Настроики</div>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar__buttons">
        <ButtonAddOrder />
        <ButtonPayment />
      </div>
    </div>
  );
}
