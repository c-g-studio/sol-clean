import Image from 'next/image';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';

import s from './styles.module.scss';

export const WorkStepsSection = () => {
  return (
    <section className={s.wrkStepsSection}>
      <AppContainer>
        <Typography variant={'h2'} className={s.WorkStepsTitle}>
          Unsere <Typography variant={'decorSpan'}>Arbeitsschritte</Typography>
        </Typography>
        <ul className={s.workStepsList}>
          <li className={s.workStepsListItem}>
            <Image
              src={'/img/home/calculator.png'}
              width={'295'}
              height={'295'}
              quality={100}
              alt={'House image'}
              className={s.image}
            />
            <div className={s.textWrapper}>
              <Typography variant={'p'} className={s.step}>
                Step 1
              </Typography>
              <Typography variant={'h3'} className={s.stepTitle}>
                Wirtschaftlichkeits-berechnung
              </Typography>
              <Typography variant={'body1'} className={s.stepText}>
                Durch einen unserer Sol-Clean Fachberater werden alle
                notwendigen Informationen zu Ihrer Photovoltaik-Anlage
                sorgfältig aufgenommen bei Ihnen vor Ort oder  digital, um Ihnen
                eine detaillierte Wirtschaftlichkeitsberechnung
                 (Kosten-Nutzen-Analyse) erstellen zu können
              </Typography>
            </div>
          </li>
          <li className={s.workStepsListItem}>
            <Image
              src={'/img/home/statistic.png'}
              width={'295'}
              height={'295'}
              quality={100}
              alt={'House image'}
              className={s.image}
            />
            <div className={s.textWrapper}>
              <Typography variant={'p'} className={s.step}>
                Step 2
              </Typography>
              <Typography variant={'h3'} className={s.stepTitle}>
                Wirtschaftlichkeitsberechnung
              </Typography>
              <Typography variant={'body1'} className={s.stepText}>
                Wir erstellen Ihnen eine umfangreiche
                Wirtschaftlichkeitsberechnung, die Ihren Stromverlust durch
                Verschmutzungen den Kosten einer Reinigung gegenüber stellt. Sie
                stellt die Basis dar eine gut überlegte Entscheidung treffen zu
                können
              </Typography>
            </div>
          </li>
          <li className={s.workStepsListItem}>
            <Image
              src={'/img/home/big_house.png'}
              width={'295'}
              height={'295'}
              quality={100}
              alt={'House image'}
              className={s.image}
            />
            <div className={s.textWrapper}>
              <Typography variant={'p'} className={s.step}>
                Step 3
              </Typography>
              <Typography variant={'h3'} className={s.stepTitle}>
                Solaranlagen-Inspektion
              </Typography>
              <Typography variant={'body1'} className={s.stepText}>
                Bei der Reinigung wird Ihre Photovoltaik Anlage auf sichtbare
                Schäden, Lockerungen und Mängel bei der Installation durch eine
                Sol-Clean durch einen Sol-Clean Service-Mitarbeiter geprüft.
                Darüberhinaus kann ein umfangreicher Check-Up durch einen Vds
                zertifizierten Sol-Clean Sachverständigen erfolgen.
              </Typography>
            </div>
          </li>
          <li className={s.workStepsListItem}>
            <Image
              src={'/img/home/lemp.png'}
              width={'295'}
              height={'295'}
              quality={100}
              alt={'House image'}
              className={s.image}
            />
            <div className={s.textWrapper}>
              <Typography variant={'p'} className={s.step}>
                Step 4
              </Typography>
              <Typography variant={'h3'} className={s.stepTitle}>
                Optimale Stromgewinnung
              </Typography>
              <Typography variant={'body1'} className={s.stepText}>
                Nach der Reinigung und Prüfung ist die maximale Stromausbeute
                und optimierte Lebensdauer der Photovoltaik-Anlage bei minimalen
                Service- und Wartungsausgaben sichergestellt. Durch unser
                Sol-Clean 365 Zuverlässigkeit-Versprechen haben Sie die
                Sicherheit, dass Ihre Anlage immer pünktlich gereinigt wird zu
                vereinbarten Zeiten bei vorheriger Terminankündigung durch die
                Sol-Clean. So können Sie sich voll und ganz Ihrem Alltag widmen
              </Typography>
            </div>
          </li>
        </ul>
      </AppContainer>
    </section>
  );
};
