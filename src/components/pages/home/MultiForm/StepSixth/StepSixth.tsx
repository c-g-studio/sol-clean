// import { FC } from 'react';
// import { Typography } from '@/components/common/Typography/Typography';
//
// import s from './styles.module.scss';
// import { SheetIcon } from '@/components/icons/SheetIcon';
// import { DollarIcon } from '@/components/icons/DollarIcon';
// import { GraphIcon } from '@/components/icons/GraphIcon';
//
// type TInputData = {
//   typeOfUse: 'business' | 'privat';
//   address: string;
//   ownerType: 'Norm' | 'Wald' | 'Acker' | 'Bauernhof' | 'Wiese';
//   solarData: number; // солнечная энергия (Einstralung)
//   year: string; // год постройки
//   nominalExit: string; // мощность, кВт
//   nearBy: unknown[];
//   absolutePollution: number;
//   efficiencyLoss: number;
//   energyGeneration: string; // сколько всего кВт*ч
//   selfConsumptionEnergy: string; // сколько потребляется
// };
//
// type TStepProps = {
//   onBack: () => void;
//   data: TInputData;
// };
//
// const verschmutzungsTabelle: Record<string, number[]> = {
//   Norm: [0.04, 0.06, 0.078, 0.0942],
//   Wald: [0.064, 0.096, 0.125, 0.151],
//   Acker: [0.068, 0.102, 0.1326, 0.1601],
//   Bauernhof: [0.088, 0.132, 0.1716, 0.2072],
//   Wiese: [0.048, 0.072, 0.0936, 0.113]
// };
//
// const ProgressBar = ({
//   label,
//   value,
//   max,
//   color
// }: {
//   label: string;
//   value: number;
//   max: number;
//   color: string;
// }) => {
//   const percent = Math.round((value / max) * 100);
//   return (
//     <div style={{ marginBottom: 16 }}>
//       <div style={{ marginBottom: 4 }}>
//         <strong>{label}:</strong> {value.toFixed(2)} €
//       </div>
//       <div
//         style={{
//           background: '#ddd',
//           height: 24,
//           borderRadius: 4,
//           overflow: 'hidden'
//         }}
//       >
//         <div
//           style={{
//             width: `${percent}%`,
//             backgroundColor: color,
//             height: '100%',
//             transition: 'width 0.3s',
//             textAlign: 'right',
//             paddingRight: 8,
//             color: '#fff',
//             fontWeight: 600
//           }}
//         >
//           {percent}%
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export const StepSixth: FC<TStepProps> = ({ onBack, data }) => {
//   console.log('data', data);
//
//   const mReinigung =
//     data.solarData *
//     Number(data.price) *
//     (data.absolutePollution / 100) *
//     ((100 - data.efficiencyLoss) / 100);
//
//   const age = Number(new Date().getFullYear()) - Number(data.year);
//
//   console.log('mReinigung', mReinigung);
//   return (
//     <div className={s.container}>
//       <Typography variant={'body3'} className={s.title}>
//         Sie sparen in
//         <br /> <span className={s.age}>{age} Jahren</span> bis zu
//         <span className={s.lossMoney}>
//           <br />
//           824,84 €
//         </span>
//       </Typography>
//
//       <ul>
//         <li className={s.item}>
//           <SheetIcon />
//           <Typography variant={'body3'} className={s.itemText}>
//             <span className={s.itemTextSpan}>Bis zu 90 %</span> weniger CO₂
//             durch Solarenergie.
//           </Typography>
//         </li>
//         <li className={s.item}>
//           <GraphIcon />
//           <Typography variant={'body3'}>
//             bis zu <span className={s.itemTextSpan}>50%</span> Verlängerung der
//             Lebensdauer
//           </Typography>
//         </li>
//         <li className={s.item}>
//           <DollarIcon />
//           <Typography variant={'body3'}>
//             Keine teuren Reparaturen durch Witterungschäden
//           </Typography>
//         </li>
//       </ul>
//     </div>
//   );
// };
