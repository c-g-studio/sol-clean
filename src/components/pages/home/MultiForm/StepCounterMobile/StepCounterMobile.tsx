// import { FC } from 'react';
// import { Typography } from '@/components/common/Typography/Typography';
//
// import s from './styles.module.scss';
//
// type TStepCounterMobileProps = {
//   step: number;
// };
//
// export const StepCounterMobile: FC<TStepCounterMobileProps> = ({ step }) => {
//   let stepName = '';
//
//   switch (step) {
//     case 1:
//       stepName = 'Auswahl des Anlagentyps';
//       break;
//     case 2:
//       stepName = 'Eigentümer + Adresse ';
//       break;
//     case 3:
//       stepName = 'Technische Daten';
//       break;
//     case 4:
//       stepName = 'Energieverbrauch und-erzeugung';
//       break;
//     case 5:
//       stepName = 'Energietarif';
//       break;
//     case 6:
//       stepName = 'Eigentümer';
//       break;
//     default:
//       stepName = ' ';
//   }
//
//   return (
//     <div className={s.counterBox}>
//       <div className={s.counter}>{step}/6</div>
//       <Typography variant={'body3'} className={s.text}>
//         {stepName}
//       </Typography>
//     </div>
//   );
// };
