import React, { useEffect, useState } from "react";
import { Carousel, Modal } from "antd";
import { serviceApi } from "../../Service/ServiceApiUser";
import { PlayCircleOutlined } from "@ant-design/icons";

const CarouselForm = () => {
  const [carouselForm, setCarouselForm] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const pushLink = (carouselData) => {
    return carouselData.map((item, index) => ({
      ...item,
      trailerUrl:
        index === 0
          ? "https://youtu.be/uqJ9u7GSaYM"
          : index === 1
          ? "https://youtu.be/kBY2k3G6LsM"
          : index === 2
          ? "https://youtu.be/Eu9G8nO5-Ug"
          : "",
    }));
  };

  useEffect(() => {
    serviceApi
      .layDanhSachBaner()
      .then((result) => {
        const updatedCarousel = pushLink(result.data.content);
        setCarouselForm(updatedCarousel);
      })
      .catch((err) => {});
  }, []);

  const showModal = (url) => {
    setVideoUrl(url);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setVideoUrl("");
  };

  let renderBaner = () => {
    return carouselForm.map((item) => {
      return (
        <div className="h-screen relative " key={item.maBanner}>
          <img className="w-full h-full" src={item.hinhAnh} alt="" />
          {item.trailerUrl && (
            <a onClick={() => showModal(item.trailerUrl)}>
              <PlayCircleOutlined
                className="absolute z-100 top-50 left-1/2 hover:scale-110 duration-300 transition-all opacity-50"
                style={{ fontSize: "70px", color: "white" }}
              />
            </a>
          )}
        </div>
      );
    });
  };

  return (
    <div>
      <Carousel dots={false} arrows autoplay>
        {renderBaner()}
      </Carousel>
      <Modal
        title="Video Trailer"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width="60%"
      >
        <iframe
          width="100%"
          height="400px"
          src={`https://www.youtube.com/embed/${
            videoUrl.split("/")[3]
          }?autoplay=1`}
          title="Video trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
};
export default CarouselForm;
