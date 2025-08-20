
import VidioBord from '@/components/VidioBord/VidioBord';
import BigCard from '@/components/BigCard/BigCard';
import BigCardFlebo from '@/components/BigCardFlebo/BigCardFlebo';
import BigCardHand from '@/components/BigCardHand/BigCardHand';
import BigCardProcto from '@/components/BigCardProcto/BigCardProcto';
import BigCardGernio from '@/components/BigCardGernio/BigCardGernio';
import BigCardAmbulate from '@/components/BigCardAmbulate/BigCardAmbulate';

export default function Home() {
  return (
    <div>
      <VidioBord />
      <BigCard />
      <BigCardFlebo />
      <BigCardHand />
      <BigCardProcto />
      <BigCardGernio />
      <BigCardAmbulate /> 
    </div>
  );
}
