import { Fragment } from 'react';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import SVG from "@/components/SVG";
import HeheImg from "@/assets/token/hehe.png";
import UsdtImg from "@/assets/token/usdt.png";

const RootBox = styled(Box)(({ theme }) => ({
  width: 543,
  height: 543,
  [theme.breakpoints.down('sm')]:{
    width: 343,
    height: 343,
  },
  position: "relative",
  display: "flex",
  justifyContent: "center"
}))

const BackgroundCircle = styled(Box)(({ theme }) => ({
  width: 543,
  height: 543,
  [theme.breakpoints.down('sm')]:{
    width: 343,
    height: 343,
  },
  borderRadius: "100%",
  position: "absolute",
  zIndex: 1
}))

const EllipseBorder = styled(Box)(({ theme }) => ({
  width: 547,
  height: 472,
  [theme.breakpoints.down('sm')]:{
    width: 347,
    height: 272,
    borderWidth: "7px"
  },
  position: "absolute",
  top: 34,
  left: "50%",
  transform: "translateX(-50%)",
  borderWidth: "12px",
  borderStyle: "solid",
  borderColor: "#fff",
  borderRadius: "50%",
  zIndex: 2
}))

const BottomCircle = styled(Box)(({ theme }) => ({
  width: 185,
  height: 185,
  [theme.breakpoints.down('sm')]:{
    width: 116,
    height: 116,
    borderWidth: "7px"
  },
  position: "absolute",
  bottom: -26,
  left: "50%",
  transform: "translateX(-50%)",
  borderWidth: "12px",
  borderStyle: "solid",
  borderColor: "#fff",
  borderRadius: "50%",
  backgroundColor: "#272C32",
  zIndex: 3
}))

const RadialBackground = styled(Box)(({ theme }) => ({
  width: 523,
  height: 448,
  [theme.breakpoints.down('sm')]:{
    width: 345,
    height: 298,
  },
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  alignItems: "center",
  position: "absolute",
  top: 46,
  left: "50%",
  transform: "translateX(-50%)",
  borderRadius: "50%",
  backgroundImage: "radial-gradient(50% 50% at 50% 50%, #454B52 0%, #272C32 100%)",
  justifyContent: "center",
  paddingTop: "32px",
  zIndex: 4
}))

const TopCircle = styled(Box)(({ theme }) => ({
  width: 185,
  height: 185,
  [theme.breakpoints.down('sm')]:{
    width: 116,
    height: 116,
    borderWidth: "7px"
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: -45,
  left: "50%",
  transform: "translateX(-50%)",
  borderWidth: "12px",
  borderStyle: "solid",
  borderColor: "#fff",
  borderRadius: "50%",
  zIndex: 4
}))

const RootTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "BalooSemiBold",
  fontWeight: 700,
  fontSize: 32,
  lineHeight: "24px"
}));

const TokenImg = styled("img")(({ theme }) => ({
  width: 24,
  height: 24,
  alignSelf: "center",
}));

const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center"
}));

const LeftEllips = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "0%",
  transform: "translateY(-50%)"
}));

const RightEllips = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  right: "0%",
  transform: "translateY(-50%)"
}));

const RootCircle = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: "100%",
  borderWidth: "4px",
  borderStyle: "solid",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}))

const levelColors = [
  "#596AFF",
  "#FF6A55",
  "#FDE048"
]

const fontColors = [
  "#000",
  "#fff",
]

interface BoostItemProps {
  item?: {
    level: number,
    id: string,
    cycle: number,
    price: string,
    hehe: number,
    usdt: number,
    users: number,
    refresh: number,
  }
}

const BoostItem: React.FC<BoostItemProps> = ({ item }) => {
  return(
    <RootBox>
      <RootCircle bgcolor={"#73777d"} borderColor={"white"}/>
      {item && (
        <Fragment>
          <BackgroundCircle bgcolor={levelColors[item?.level - 1]} />
          <EllipseBorder />
          <RadialBackground>
            <FlexBox gap={1} width={{xs: 207, sm: 360}} justifyContent={"space-between"}>
              <FlexBox>
                <RootTypography fontSize={{xs: 24, sm: 32}}>{item?.id}</RootTypography>
              </FlexBox>
              <FlexBox>
                <TokenImg src={HeheImg} />
                <RootTypography fontSize={{xs: 24, sm: 32}}>{item?.price}</RootTypography>
              </FlexBox>
            </FlexBox>
            <FlexBox gap={"25px"} margin={"10px 0px 16px"}>
              <RootCircle bgcolor={"white"} borderColor={"white"}>
                <RootTypography color={"black"} sx={{fontSize: "20px"}}>1213123</RootTypography>
              </RootCircle>
              <RootCircle bgcolor={"#73777d"} borderColor={"white"}/>
              <RootCircle bgcolor={"#73777d"} borderColor={"white"}/>
            </FlexBox>
            <FlexBox flexDirection={"column"} gap={1}>
              <FlexBox gap={1}>
                <FlexBox gap={"4px"}>
                  <SVG id="users" width={24} height={24} />
                  <RootTypography sx={{fontSize: "20px"}}>{item?.users}</RootTypography>
                </FlexBox>
                <FlexBox gap={"4px"}>
                  <SVG id="refresh" width={24} height={24} />
                  <RootTypography sx={{fontSize: "20px"}}>{item?.refresh}</RootTypography>
                </FlexBox>
              </FlexBox>
              <FlexBox gap={2}>
                <RootTypography sx={{fontSize: "15px"}}>Total level revenue:</RootTypography>
                <FlexBox gap={1}>
                  <TokenImg src={HeheImg} />
                  <RootTypography sx={{fontSize: "15px"}}>{item?.hehe}</RootTypography>
                </FlexBox>
                <FlexBox gap={1}>
                  <TokenImg src={UsdtImg} />
                  <RootTypography sx={{fontSize: "15px"}}>{item?.usdt}</RootTypography>
                </FlexBox>
              </FlexBox>
            </FlexBox>
          </RadialBackground>
          <BottomCircle />
          <TopCircle bgcolor={levelColors[item?.level - 1]}>
            <RootTypography color={fontColors[item?.level % 3]}>lvl {item?.level}</RootTypography>
          </TopCircle>
        </Fragment>
      )}
      <LeftEllips>
        <SVG id='left-ellips' width={10} height={6} />
      </LeftEllips>
      <RightEllips>
        <SVG id='right-ellips' width={10} height={6} />
      </RightEllips>
    </RootBox>
  )
}

export default BoostItem;
