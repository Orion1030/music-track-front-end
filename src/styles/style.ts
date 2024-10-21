import { styled, css } from 'styled-components'
import { Input, Button, Card, List, Tag, Typography, Form } from 'antd';
import { NavLink as RouterNavLink } from 'react-router-dom'

const { Title, Text } = Typography;

export const StyledPage = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 65px;
`;
export const StyledUserPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;

  & > div {
    flex: 1;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
  & .ant-select{
    width: 100%;
  }
`;

export const StyledInput = styled(Input)`
  margin-right: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const StyledButton = styled(Button)`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const TrackMetadataContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoverImage = styled.img`
  width: 100%;
  height: auto;
  max-width: none;
  max-height: none;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled(Text)`
  font-size: 18px;
  font-weight: bold;
`;

export const StyledMetadata = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }

`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    padding: ${theme.spacing[8]};
    background: ${theme.colors.slate[100]};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing[10]};
  `}
`

export const NavLink = styled(RouterNavLink)`
  ${({ theme }) => css`
    font-size: 3rem;
    transition: 200ms ease-in-out;
    border-bottom: 2px solid ${theme.colors.transparent};

    &:hover {
      color: ${theme.colors.slate[400]};
    }

    &.active {
      color: ${theme.colors.slate[600]};
      border-color: ${theme.colors.slate[600]};
    }
  `}

`
export const MobileNav = styled.nav`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    background: ${theme.colors.slate[100]};
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    z-index: 100;
    box-shadow: 0 0 10px 4px #e8e8e8ad;
  `}
`

export const MobileNavLink = styled(RouterNavLink)`
  ${({ theme }) => css`
    font-size: 2rem;
    transition: 200ms ease-in-out;
    padding: ${theme.spacing[4]} ${theme.spacing[4]};
    margin: 0 ${theme.spacing[2]};
    border-top: 2px solid ${theme.colors.transparent};
    &:hover {
      color: ${theme.colors.slate[400]};
    }

    &.active {
      color: ${theme.colors.slate[600]};
      border-color: ${theme.colors.slate[600]};
    }
  `}
`
export const StyledAppLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const StyledCard = styled(Card)`
  width: 500px;
  height: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const StyledUserContainer = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  & .ant-card-body {
    padding: 32px !important;
  }
`;

export const StyledUserCard = styled(Card)`
  max-width: 450px;
  width: 100%;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  & .ant-card-body {
    padding: 24px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding: 32px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      padding: 48px 64px;
    }
  }

  & .ant-row > .ant-col {
    margin-bottom: 0;
  }
`;

export const StyledUserCardHeader = styled.div`
  margin-bottom: 20px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    margin-bottom: 32px;
  }

  & h3 {
    margin-bottom: 0;
    font-weight: 400;
    font-size: 20px;
  }
`;

export const StyledUserForm = styled(Form)`
  text-align: left;
  margin-bottom: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin-bottom: 20px;
  }

  & .form-field {
    margin-bottom: 20px;
  }
`;

export const StyledFloatLabel = styled.div`
  position: relative;
  margin-bottom: 28px;
  & .ant-input {
    height: 50px;
  }
  & .ant-input-password .ant-input {
    height: 40px;
  }
`;

export const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 12px;
  top: 12px;
  transition: 0.2s ease all;
  z-index: 100;
  padding: 2px 4px;

  &.label-float {
    background-color: white;
    left: 10px;
    top: -10px;
    font-size: 10px;
  }
`;

export const StyledUserFormBtn = styled(Button)`
  width: 100%;
`;
