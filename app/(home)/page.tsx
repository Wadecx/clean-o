import { Avis } from '@/containers/home/avis';
import { Herobanner } from '@/containers/home/herobanner';
import { Incontournable } from '@/containers/home/incontournable';
import { Interventions } from '@/containers/home/interventions';
import { Locaux } from '@/containers/home/locaux-impecable';
import { Promesse } from '@/containers/home/promesse';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function HomePage() {
  return <>
  <Herobanner/>
  <Interventions/>
  <Locaux/>
  <Avis/>
  <Incontournable/>
  <Promesse/>
  </>;
}
