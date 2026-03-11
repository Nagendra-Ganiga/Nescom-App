import NestleTextTFBold from "../../assets/fonts/NestleTextTF-Bold.woff";
import NestleTextTFBook from "../../assets/fonts/NestleTextTF-Book.woff";
import NestleTextTFItalic from "../../assets/fonts/NestleTextTF-Italic.woff";
import NestleTextTFLight from "../../assets/fonts/NestleTextTF-Light.woff";

export const FontFamily = {
  Bold: "NestleTextTF-Bold",
  Book: "NestleTextTF-Book",
  Italic: "NestleTextTF-Italic",
  Light: "NestleTextTF-Light",
};

export const FontFaces = `
@font-face {
  font-family: "NestleTextTF-Bold";
  src: url(${NestleTextTFBold}) format("woff");
}
@font-face {
  font-family: "NestleTextTF-Book";
  src: url(${NestleTextTFBook}) format("woff");
}
@font-face {
  font-family: "NestleTextTF-Italic";
  src: url(${NestleTextTFItalic}) format("woff");
}
@font-face {
  font-family: "NestleTextTF-Light";
  src: url(${NestleTextTFLight}) format("woff");
}
`;
