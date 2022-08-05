import { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Faq = () => {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <section id="faq" className="faq">
        <div className="box container mx-xl">
          <h2>FAQ</h2>
          <div>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>
                  장바구니 할인쿠폰의 사용범위에 대해 알고 싶어요.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  - 장바구니 쿠폰은 ‘결제페이지-할인혜택’ 단계에서 적용
                  가능하며, 각 쿠폰의 기준 금액 및 할인금액이 다르므로 사용 전
                  반드시 확인 해주시기 바랍니다.
                  <br />
                  - 장바구니 쿠폰은 대상 상품 합산 3만원 이상 구매 시 최대
                  1만원까지 할인 적용됩니다.
                  <br />
                  - 쿠폰은 기타 할인 혜택(적립쿠폰, 카드쿠폰, 등급쿠폰 등)과
                  중복 적용되지 않으며, 할인액 및 배송비는 기준 금액에서
                  제외됩니다.
                  <br />
                  - 할인쿠폰은 장보기 상품 및 일부 상품(상품권, 서비스상품,
                  행사상품, 특가상품 등)에는 적용되지 않으며, 주문 시 결제
                  페이지에서 쿠폰 확인이 되지 않을 경우, 해당 상품은 쿠폰 적용이
                  불가한 상품입니다.
                  <br />
                  - 쿠폰은 매월 1일부터 말일까지 다운로드 가능하며, 다운로드
                  받은 쿠폰의 사용 기간은 매월 말일과 본인의 멤버십 종료 도래일
                  중 더 가까운 기간입니다.
                  <br />
                  - 할인쿠폰을 사용하여 주문 후 부분 취소/반품 하셨을 때는
                  쿠폰이 재발급 되지 않습니다.(전체 취소/반품 시에만 재발급
                  가능)
                  <br />
                  - 재발급된 쿠폰의 유효기간이 종료된 경우, 재발급된 다음날 밤
                  12시까지 사용 가능합니다.
                  <br />- 할인쿠폰은 스마일클럽 정상 가입고객에 한해 발급됩니다.
                  (간편회원, 법인회원 제외)
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography>
                  스마일클럽 가입과 가입비 결제는 어떻게 하나요?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  스마일클럽은 신세계포인트 통합 회원에 한해 가입 가능하며, 매월
                  가입비 3,900원 자동 결제를 통해 스마일클럽 서비스를 이용할 수
                  있습니다.
                  <br />
                  월가입비 결제는 SSGPAY(신용/체크카드)로만 가능하며, 카드가
                  SSGPAY에 등록되지 않은 경우 카드 정보 등록을 먼저 진행하셔야
                  합니다. (최초 1회)
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography>스마일클럽은 무엇인가요?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  스마일클럽은 한 번의 가입으로 SSG.COM은 물론 G마켓, 옥션에서
                  적립, 할인, 배송 등 다양한 혜택을 누릴 수 있는 최고의 쇼핑
                  멤버십 서비스입니다. 향후 스마일클럽은 SSG.COM, G마켓, 옥션의
                  쇼핑 혜택 뿐만 아니라 온-오프라인을 넘나드는 신세계 그룹
                  계열사 혜택, 그리고 고객님들이 가장 선호하시는 외부 제휴
                  혜택까지 더하여 폭넓은 방식으로 계속 진화해 나갈 예정입니다.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Typography>
                  멤버십 혜택과 등급혜택을 원하는 대로 선택하여 이용이
                  가능한가요?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  멤버십 혜택과 등급혜택 중 선택하여 이용하실 수 있으며
                  중복사용은 불가합니다. 멤버십 가입 시, 기본 설정은 ‘멤버십
                  혜택‘을 사용하는 것으로 되어 있으며, 이후 선택 변경이
                  가능합니다.
                  <br />※ 단, 혜택 사용여부에 따라 즉시변경 불가할 수 있습니다.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                aria-controls="panel5d-content"
                id="panel5d-header"
              >
                <Typography>배송혜택의 사용 방법과 조건이 궁금해요.</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  ○ 무료배송 쿠폰은 SSG에서 스마일클럽을 가입한 고객에게
                  제공되는 혜택입니다.
                  <br />
                  ○ 쓱배송/새벽배송 상품으로 15,000원 이상 결제 시 배송비 쿠폰
                  선택 화면에서 &apos;스마일클럽 전용 무료배송 쿠폰&apos; 확인
                  후 적용해주시기 바랍니다. <br />○ 무료 배송 쿠폰의 경우 매월
                  1회 제공되는 가운데, 런칭 기념으로 ’22년 8월까지 1회 추가로
                  제공됩니다. (이후 혜택 변경 가능) ※ 모든 혜택은 지급일 기준
                  정상회원에게만 지급되며, 쿠폰의 유효기간은 매월 말일과 본인의
                  멤버십 종료 도래일 중 더 가까운 기간입니다.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
