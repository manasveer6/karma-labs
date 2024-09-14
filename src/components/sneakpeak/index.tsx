import styled from 'styled-components';

const SneakPeakContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  position: relative;
  overflow: hidden;
  width: 100%;
  left : 5%;
`;

const SneakPeakCard = styled.div`
  background: linear-gradient(105.22deg, rgba(24, 24, 28, 0.16) 0%, rgba(220, 115, 39, 0.24) 100%);
  border-radius: 20px;
  border: 1px solid #f47921;
  height: 442px;
  width: 45%; /* Adjust this width as necessary */
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding: 20px;
`;

const ImageScrollContainer = styled.div`
  position: absolute;
  left: 26px;
  top: 148px;
  width: calc(100% - 32px);
  height: 400px;
  overflow-y: scroll; /* Scroll vertically */
  border-radius: 12px;
  border-style: solid;
  border-image: linear-gradient(180deg, rgba(244, 121, 33, 0.50) 0%, rgba(244, 121, 33, 1.00) 100%);
  border-image-slice: 1;
  object-fit: cover;
`;

const Heading = styled.h3`
  color: #f47921;
  text-align: left;
  font-family: 'SpaceGrotesk-Regular', sans-serif;
  font-size: 36px;
  line-height: 44px;
  font-weight: 400;
  position: absolute;
  left: 20px;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const CodeImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const SneakPeak = () => {
  return (
    <SneakPeakContainer>
      {/* First Card */}
      <SneakPeakCard>
        <Heading>Code enhanced by AI mentor</Heading>
        <ImageScrollContainer>
          {/* Image for first card */}
          <CodeImage src="/vscode1.png" alt="AI enhanced code" />
        </ImageScrollContainer>
      </SneakPeakCard>

      {/* Second Card */}
      <SneakPeakCard>
        <Heading>Code playground made for you</Heading>
        <ImageScrollContainer>
          {/* Image for second card */}
          <CodeImage src="/vscode1.png" alt="Code playground" />
        </ImageScrollContainer>
      </SneakPeakCard>
    </SneakPeakContainer>
  );
};

export default SneakPeak;
