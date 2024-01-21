import PortfolioComponent from "../../components/PortfolioComponent/PortfolioComponent";
import { PortfolioProps } from "../../components/PortfolioComponent/PortfolioComponent";

type PortfProps = PortfolioProps;

const PortfolioPage = ({ title }: PortfProps) => {
  return <PortfolioComponent title={title} />;
};

export default PortfolioPage;
