import AffiliateDisclosure from './components/AffiliateDisclosure';
import ComparisonTable from './components/ComparisonTable';
import ToolCard from './components/ToolCard';
import ProsConsBox from './components/ProsConsBox';
import CTAButton from './components/CTAButton';
import RatingBox from './components/RatingBox';
import FAQSection from './components/FAQSection';
import PricingTable from './components/PricingTable';
import Screenshot from './components/Screenshot';
import Callout from './components/Callout';
import AuthorNote from './components/AuthorNote';

export function useMDXComponents(components) {
  return {
    AffiliateDisclosure,
    ComparisonTable,
    ToolCard,
    ProsConsBox,
    CTAButton,
    RatingBox,
    FAQSection,
    PricingTable,
    Screenshot,
    Callout,
    AuthorNote,
    ...components,
  };
}
