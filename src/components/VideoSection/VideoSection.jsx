import "./style.css";

const VideoSection = () => {
  return (
    <div className="video__section container">
      <h2 className="video__section_title">Как проходит урок</h2>

      <div className="video__section_content">
        <div className="video__container">
          <iframe
            className="video__iframe"
            src="https://www.youtube.com/embed/dRAEdZSaJA8"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video__text">
          <p>
            Мы вынуждены отталкиваться от того, что начало повседневной работы
            по формированию позиции прекрасно подходит для реализации
            глубокомысленных рассуждений. В своём стремлении повысить качество
            жизни.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
