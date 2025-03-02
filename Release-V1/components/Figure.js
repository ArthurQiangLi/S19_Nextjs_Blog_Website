function Figure({ src, alt, width, height, caption }) {
  // Container styles for the figure
  const figureStyle = {
    textAlign: "center",
    margin: "1em 0",
  };

  // Image styles
  const imgStyle = {
    display: "block",
    margin: "0 auto", //top-bottom margin = 0, left-right = auto (center it)
    // boxShadow: "3px 3px 3px 0px grey",
    // borderRadius: "5px",
    // border: "solid 1px",
    width: width || "auto",
    height: height || "auto",
  };

  if (width && height) {
    // When both dimensions are set, use objectFit to maintain aspect ratio within the given box.
    imgStyle.objectFit = "contain";
  }

  // Caption styles
  const figcaptionStyle = {
    fontStyle: "italic",
    marginTop: "0.5em",
    color: "#555",
  };

  return (
    <figure style={figureStyle}>
      <img src={src} alt={alt} style={imgStyle} />
      {caption && caption.trim() && <figcaption style={figcaptionStyle}>{caption}</figcaption>}
    </figure>
  );
}

function TwoFigures({ src1, src2, alt1, alt2, height, caption1, caption2, gap = "10px" }) {
  // Container style: flex container for side-by-side figures
  const containerStyle = {
    display: "flex",
    gap: gap,
    justifyContent: "center",
    margin: "1em 0",
  };

  // Shared image style
  const imgStyle = {
    display: "block",
    margin: "0 auto",
    // boxShadow: "3px 3px 3px 0px grey",
    // border: "solid 1px",
    height: height || "auto",
    width: "auto",
    objectFit: "contain",
  };

  // Figure style for each image
  const figureStyle = {
    textAlign: "center",
    margin: 0,
  };

  // Caption style for each figure
  const figcaptionStyle = {
    fontStyle: "italic",
    marginTop: "0.5em",
    color: "#555",
  };

  return (
    <div style={containerStyle}>
      <figure style={figureStyle}>
        <img src={src1} alt={alt1} style={imgStyle} />
        {caption1 && caption1.trim() && <figcaption style={figcaptionStyle}>{caption1}</figcaption>}
      </figure>
      <figure style={figureStyle}>
        <img src={src2} alt={alt2} style={imgStyle} />
        {caption2 && caption2.trim() && <figcaption style={figcaptionStyle}>{caption2}</figcaption>}
      </figure>
    </div>
  );
}

export { Figure, TwoFigures };
