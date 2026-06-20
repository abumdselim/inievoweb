import Image from "next/image";
import HeroScrollChrome from "@/components/HeroScrollChrome";
import { PROFILE_IMAGE_URL, SIGNATURE_IMAGE_URL } from "@/lib/navigation";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="image-container">
        <Image
          src={PROFILE_IMAGE_URL}
          alt="Abu Md. Selim"
          fill
          className="profile-img"
          priority
          quality={75}
          sizes="(max-width: 768px) 100vw, min(100vw, 1920px)"
        />
        <div className="bottom-shadow" />
      </div>
      <HeroScrollChrome
        signature={
          <Image
            src={SIGNATURE_IMAGE_URL}
            alt="Abu Md. Selim Signature"
            width={256}
            height={73}
            className="signature-img"
            sizes="256px"
            quality={90}
          />
        }
      />
    </section>
  );
}
