const { default: styled } = require("styled-components");

const SidebarStyled = styled.nav`
  position: relative; 
  height: 100%;
  width: 300px;
  
  ul {
    list-style: none;

    li {
      background: #EEEEEE;
      padding: 15px 10px;
    }
  }
`

export default SidebarStyled