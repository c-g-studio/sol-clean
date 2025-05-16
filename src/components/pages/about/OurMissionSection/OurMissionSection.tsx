import Image from 'next/image';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';
import { SolPanelMobile } from '@/components/icons/aboutPage/ourMission/SolPanelMobile';

import s from './styles.module.scss';

export const OurMissionSection = () => {
  return (
    <section className={s.ourMissionSection}>
      <AppContainer classes={s.ourMissionContainer}>
        <Typography variant={'h1'} className={s.sectionTitle}>
          Unser <Typography variant={'decorSpan'}>Mission</Typography>
        </Typography>

        <Image
          src={'/img/about/ourMissionSection/mobile_image.png'}
          width={'728'}
          height={'517'}
          alt={'sunny panels image'}
          className={s.mobileImage}
        />
        <div className={s.dosktopContentWrapper}>
          <div className={s.contentWrapper}>
            <Typography variant={'h2'} className={s.subtitle}>
              Sol-Clean: Sichern Sie die Zukunft Ihrer Energie!
            </Typography>
            <Typography variant={'body2'} className={s.text}>
              Stellen Sie sich vor, Ihre Solarmodule arbeiten mit voller
              Leistung und bieten Ihnen maximale Einsparungen und Effizienz! Bei
              Sol-Clean wissen wir, wie wir die Lebensdauer Ihres Systems
              verlängern und seine Produktivität steigern können. Unsere
              Erfahrung und moderne Technologien machen Ihre Investition zu
              einer echten Quelle für Einsparungen und Nachhaltigkeit.
            </Typography>
          </div>
          <SolPanelMobile className={s.solPanelImageMobile} />
        </div>
        <Image
          src={'/img/about/ourMissionSection/Visual.png'}
          width={'1300'}
          height={'487'}
          alt={'sunny panels image'}
          className={s.solPanelImageTablet}
        />
        <Image
          src={'/img/about/ourMissionSection/hero_background.png'}
          width={'982'}
          height={'551'}
          alt={'sunny panels image'}
          className={s.heroBackground}
        />
      </AppContainer>
    </section>
  );
};
