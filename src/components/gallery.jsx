import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Gallery = props => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const data = [
    { thumb: "img/portfolio/wine/huongviet1.jpg", title: "Tiệc sử dụng rượu Hương Việt" },
    { thumb: "img/portfolio/wine/huongviet2.jpg", title: "Nơi sản xuất" },
    { thumb: "img/portfolio/wine/huongviet3.jpg", title: "Nơi ủ rượu" },
    { thumb: "img/portfolio/wine/huongviet4.jpg", title: "Lorem Ipsum4" },
    { thumb: "img/portfolio/wine/huongviet5.jpg", title: "Lorem Ipsum5" },
    { thumb: "img/portfolio/wine/huongviet6.jpg", title: "Lorem Ipsum6" },
    { thumb: "img/portfolio/07-small.jpg", title: "Lorem Ipsum7" },
    { thumb: "img/portfolio/08-small.jpg", title: "Lorem Ipsum8" },
    { thumb: "img/portfolio/09-small.jpg", title: "Lorem Ipsum9" }
  ];

  const images = data.map(obj => obj.thumb.replace("-small", "-large"));

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Chúng tôi tự hào cung cấp một bộ sưu tập đa dạng của các loại rượu nổi tiếng, rượu mạnh và các loại đặc sản khác. Từ những chai rượu nổi tiếng của các nhà sản xuất hàng đầu đến những sản phẩm độc đáo từ các vùng nho quyến rũ, chúng tôi luôn nỗ lực đáp ứng mọi sở thích và yêu cầu của khách hàng.</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {data.map(({ title, thumb }, index) => (
              <div key={index} onClick={() => openImageViewer(index)} className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item cursor">
                  <div className="hover-bg">
                    <div className="hover-text">
                      <h4>{title}</h4>
                    </div>
                    <img src={thumb} className="img-responsive" alt="Project Title" />{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isViewerOpen && (
            <ImageViewer
              src={images}
              backgroundStyle={{ zIndex: 99999 }}
              currentIndex={currentImage}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </div>
  );
};
