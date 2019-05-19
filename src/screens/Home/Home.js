import React from "react";
import styled from "styled-components";
import Img from "react-image";

// Components //
import Text from "components/Text";

const Root = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Wordmark = styled(Text)`
  margin-top: 8px;
`;

const Subtext = styled(Text)`
  margin-top: 16px;
  letter-spacing: 2px;
`;

const Home = () => {
  return (
    <Root>
      <Img src="https://i.imgur.com/yXp4z4e.png" height={150} width={150} />
      <Wordmark weight="200" size={40}>
        S5E
      </Wordmark>
      <Subtext faded>
        <a href="https://s5e.typeform.com/to/FacUDP" target="_blank">
          Work with us
        </a>{" "}
        •{" "}
        <a href="mailto:nick@s5e.dev" target="_blank">
          Get in touch
        </a>
      </Subtext>
    </Root>
  );
};

export default Home;
