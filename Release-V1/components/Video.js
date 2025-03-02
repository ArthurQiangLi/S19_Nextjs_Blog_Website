export default function Video({ src, width = "100%", height = "auto", controls = true, muted = true, caption = "" }) {
  const videoStyle = {
    display: "block",
    margin: "0 auto", // Center the video
    border: "solid 1px",
    width: width,
    height: height,
  };

  const captionStyle = {
    // textAlign: "center",
    // fontSize: "14px",
    // color: "#555",
    // marginTop: "8px",

    fontStyle: "italic",
    marginTop: "0.5em",
    color: "#555",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <video style={videoStyle} controls={controls} muted={muted}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {caption && <p style={captionStyle}>{caption}</p>}
    </div>
  );
}

