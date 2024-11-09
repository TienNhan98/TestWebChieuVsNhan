import React from "react";
import { Col, Row } from "antd";
import lgCgv from "../../assets/image/listDoiTac/cgv.jpg";
import lgBhd from "../../assets/image/listDoiTac/bhd.png";
import lgCs from "../../assets/image/listDoiTac/cs.png";
import lgp from "../../assets/image/listDoiTac/p.png";
import lgLt from "../../assets/image/listDoiTac/lotte.png";
import lgMg from "../../assets/image/listDoiTac/mega.png";
import lgNL from "../../assets/image/listDoiTac/nex.png";
import lgGlx from "../../assets/image/listDoiTac/glx.png";
import lgZL from "../../assets/image/listDoiTac/LogoZl.png";
import lgFB from "../../assets/image/listDoiTac/LogoFB.png";
const FooterForm = () => (
  <>
    <Row className="p-4">
      <Col span={8}>
        <div className="py-3">
          <strong>TIX</strong>
        </div>
        <div>
          <Row>
            <Col span={12}>
              <a
                className="no-underline hover:text-black duration-300 transition-all"
                style={{ color: "gray" }}
              >
                FAQ
              </a>
            </Col>
            <Col span={12}>
              <a
                className="no-underline hover:text-black duration-300 transition-all"
                style={{ color: "gray" }}
              >
                Brand Guidelines
              </a>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={12}>
              <a
                className="no-underline hover:text-black duration-300 transition-all"
                style={{ color: "gray" }}
              >
                Thỏa thuận sử dụng
              </a>
            </Col>
            <Col span={12}>
              <a
                className="no-underline hover:text-black duration-300 transition-all"
                style={{ color: "gray" }}
              >
                Chính sách bảo mật
              </a>
            </Col>
          </Row>
        </div>
      </Col>
      <Col span={8}>
        <div className="py-3">
          <strong>Đối Tác</strong>
        </div>
        <div>
          <Row>
            <Col className="mb-3" span={6}>
              <a target="_blank" href="https://bhdstar.vn/">
                <img
                  className="rounded rounded-circle border-green-200 border-2 hover:scale-150 duration-300 transition-all"
                  src={lgBhd}
                  width={35}
                  alt=""
                />
              </a>
            </Col>
            <Col className="mb-3" span={6}>
              <a target="_blank" href="https://www.galaxycine.vn/">
                <img
                  className="rounded rounded-circle border-green-200 border-2 hover:scale-150 duration-300 transition-all "
                  src={lgGlx}
                  width={35}
                  alt=""
                />
              </a>
            </Col>
            <Col className="mb-3" span={6}>
              <a
                target="_blank"
                href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGdlSrbI65uhqjWKKwmGrMW5MSanaoGUgrg&s"
              >
                <img
                  className="rounded rounded-circle border-green-200 border-2 hover:scale-150 duration-300 transition-all "
                  src={lgp}
                  width={35}
                  alt=""
                />
              </a>
            </Col>
            <Col className="mb-3" span={6}>
              <a target="_blank" href="https://www.cgv.vn/">
                <img
                  className="rounded rounded-circle border-green-200 border-2 hover:scale-150 duration-300 transition-all "
                  src={lgCgv}
                  width={35}
                  alt=""
                />
              </a>
            </Col>
            <Col className="mb-3" span={6}>
              <a target="_blank" href="https://m.megagscinemas.vn/">
                <img
                  className="rounded rounded-circle border-green-200 border-2 hover:scale-150 duration-300 transition-all "
                  src={lgMg}
                  width={35}
                  alt=""
                />
              </a>
            </Col>
            <Col className="mb-3" span={6}>
              <a target="_blank" href="https://cinestar.com.vn/">
                <img
                  className="rounded rounded-circle border-green-200 border-2 hover:scale-150 duration-300 transition-all "
                  src={lgCs}
                  width={35}
                  alt=""
                />
              </a>
            </Col>
            <Col className="mb-3" span={6}>
              <a
                target="_blank"
                href="https://www.lottecinemavn.com/LCHS/Contents/Movie/Movie-List.aspx"
              >
                <img
                  className="rounded rounded-circle border-green-200 border-2 hover:scale-150 duration-300 transition-all "
                  src={lgLt}
                  width={35}
                  alt=""
                />
              </a>
            </Col>
            <Col className="mb-3" span={6}>
              <a target="_blank" href="https://www.netflix.com/vn/">
                <img
                  className="rounded rounded-circle border-green-200 border-2 hover:scale-150 duration-300 transition-all "
                  src={lgNL}
                  width={35}
                  alt=""
                />
              </a>
            </Col>
          </Row>
        </div>
      </Col>
      <Col span={8}>
        <div className="py-3">
          <strong>SOCIAL</strong>
        </div>
        <div>
          <Row>
            <Col className="mb-3" span={4}>
              <a target="_blank" href="https://www.facebook.com/">
                <img
                  className="rounded rounded-circle border-green-200 border-2 hover:scale-150 duration-300 transition-all "
                  src={lgFB}
                  width={35}
                  alt=""
                />
              </a>
            </Col>
            <Col className="mb-3" span={2}>
              <a
                target="_blank"
                href="https://id.zalo.me/account?continue=https%3A%2F%2Fchat.zalo.me%2F"
              >
                <img
                  className="rounded rounded-circle border-green-200 border-2 hover:scale-150 duration-300 transition-all "
                  src={lgZL}
                  width={35}
                  alt=""
                />
              </a>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </>
);
export default FooterForm;
