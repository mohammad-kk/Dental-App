// "use client"; 

import { Container, Main, Section } from "@/components/craft";
// import FeatureCTA from "@/components/home-page/cta";
import FeatureLeft from "@/components/home-page/feature-left";
import FeatureCTAForm from "@/components/home-page/feature-cta";
import FeatureHowitWorks from "@/components/home-page/feature-list";
import FeatureImages from "@/components/home-page/feature-carousel";
import FeatureServices from "@/components/home-page/feature-set";
import Footer from "@/components/home-page/footer";
import Hero from "@/components/home-page/hero";
import ReviewCarousel from '@/components/home-page/ReviewCarousel';
import Testimonials from "@/components/home-page/testimonials";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
          <Hero />
          <FeatureHowitWorks />
          <FeatureImages />
          {/* <ReviewCarousel />  */}
          <FeatureServices />
          <FeatureCTAForm />
          {/* <Testimonials /> */}
          {/* <Footer /> */}
        </Container>
      </Section>
    </Main>
  );
}

