import HeroSection from "../components/HeroSection/HeroSection";
import FeatureItem from "../components/FeatureItem/FeatureItem";
import chatIcon from "../assets/img/icon-chat.png";
import moneyIcon from "../assets/img/icon-money.png";
import securityIcon from "../assets/img/icon-security.png";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <section className="features">
        <FeatureItem
          imgSrc={chatIcon}
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <FeatureItem
          imgSrc={moneyIcon}
          title="More savings means higher rates"
          description="The more you save with us, the higher your interest rate will be!"
        />
        <FeatureItem
          imgSrc={securityIcon}
          title="Security you can trust"
          description="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </div>
  );
};

export default HomePage;
