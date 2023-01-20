import { Box, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Category.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CategoryData from "../../data/Category.json";

const Container = styled(Box)`
  display: flex;
  margin-top: 55px;
  justify-content: space-between;
`;

const Body = styled(Box)`
  padding: 12px 8px;
  text-align: center;
  cursor: pointer;
`;
const Title = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
  text-align: center;
`;
const SubTitle = styled(Typography)`
  font-size: 14px;
`;

const StyledContainer = styled(Box)`
  display: flex;
`;

const Category = () => {
  const [activesubList, setactivesubList] = useState(0);

  return (
    <Container>
      {CategoryData.map((item, index) => (
        <>
          <Body key={index.toString()} className="tooltip categoryMain">
            <img src={item.icon} alt={item.title} style={{ width: 64 }} />
            <StyledContainer>
              <Title className="CategoryTitle">{item.title} </Title>
              {item.subCategory && (
                <KeyboardArrowDownIcon
                  style={{
                    height: 14,
                    marginTop: 4,
                  }}
                  className="categoryIcon"
                />
              )}
            </StyledContainer>
            {item.subCategory && (
              <div
                className={
                  index === CategoryData.length - 1
                    ? "LastToolTip"
                    : "tooltipcontent"
                }
                key={index}
              >
                <StyledContainer >
                  <Box
                    style={{
                      width: "51%",
                      background: "#FFF",
                      boxShadow: "0 4px 16px 0 rgb(0 0 0 / 20%)",
                      zIndex: 100,
                    }}
                  >
                    <ul className="sublist">
                      {item.subCategory.map((sub, indexSub) => (
                        <>
                          <li
                            key={indexSub.toString()}
                            onMouseOver={() => {
                              setactivesubList(indexSub);
                            }}
                          >
                            <StyledContainer
                              className="leftList"
                              style={{
                                justifyContent: "space-between",
                              }}
                            >
                              <SubTitle
                                style={
                                  activesubList === indexSub
                                    ? { color: "blue" }
                                    : { color: "#000" }
                                }
                              >
                                {sub.name}
                              </SubTitle>
                              <Box className="sub-icons">
                                <ArrowForwardIosIcon style={{ height: 14 }} />
                              </Box>
                            </StyledContainer>
                          </li>
                        </>
                      ))}
                    </ul>
                  </Box>
                  {item.subCategory[activesubList] && (
                    <Box
                      style={{
                        width: "49%",
                        background: "#fff",
                        zIndex: 90,
                      }}
                      key={index}
                    >
                      <ul className="sublist">
                        <Typography
                          style={{
                            color: "gray",
                            textTransform: "uppercase",
                            fontSize: 12,
                            marginTop: 10,
                            textAlign: "left",
                            marginLeft: 10,
                          }}
                        >
                          More in {item.subCategory[activesubList].name}
                        </Typography>
                        {activesubList !== null &&
                          item.subCategory[activesubList].innerCategory.map(
                            (inner, indexInner) => (
                              <>
                                <li key={indexInner.toString()}>
                                  <Box className="rightList">
                                    <SubTitle>{inner.name}</SubTitle>
                                  </Box>
                                </li>
                              </>
                            )
                          )}
                      </ul>
                    </Box>
                  )}
                </StyledContainer>
              </div>
            )}
          </Body>
        </>
      ))}
    </Container>
  );
};

export default Category;
