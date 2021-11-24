import Image from "next/image";
import picture from "../public/picture.jpeg";

export default function Home() {
  return (
    <div>
      <div
        style={{
          width: "600px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ alignSelf: "center" }}>
          <h1>Statically Imported Image</h1>
        </div>
        <div
          style={{
            width: "300px",
            height: "500px",
            position: "relative",
            alignSelf: "center",
          }}
        >
          {/* the image component below renders a statically imported image */}
          <Image src={picture} alt="My picture" />

          {/* uncomment the line below and the object in the "next.config" file for remote image from Cloudinary */}
          {/* <Image
            src="/picture.jpg"
            alt="My Picture"
            width={300}
            height={500}
          /> */}

          {/* uncomment the line below for image with layout "fill" */}
          {/* <Image
            src="https://res.cloudinary.com/ifeomaimoh/image/upload/v1637573164/picture.jpg"
            alt="My Picture"
            layout="fill"
          /> */}
        </div>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </p>
      </div>
    </div>
  );
}
