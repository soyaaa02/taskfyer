import Image from "next/image";

export default function ImgaeGallery () {
  return (
    <div>
        <h1>Image Gallery</h1>
        <Image 
        src="public\images\ArtOfLiving-bw.jpg"
        alt="Local Image"
        />
    </div>
  );
}