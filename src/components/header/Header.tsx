import { useEffect, useState } from "react";
import styled from "styled-components";
import "./Header.css";
const logo = "/logo-name.svg";

const StyledHeader = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

export default function Header(): JSX.Element {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => setNow(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <StyledHeader>
      <p className="header-text">University</p>
      <span className="header__time">Time: {now.toLocaleTimeString()}</span>
    </StyledHeader>
  );
}
