import { FC } from 'react';
import Image from 'next/image';
import { Typography } from '@/components/common/Typography/Typography';
import { Button } from '@/components/common/Button/Button';

import s from './styles.module.scss';
import { SheetIcon } from '@/components/icons/SheetIcon';
import { DollarIcon } from '@/components/icons/DollarIcon';
import { GraphIcon } from '@/components/icons/GraphIcon';

import { useModal } from '@/hooks/useModal';
import { BookAppointmentModalLite } from './components/BookAppointmentModalLite/BookAppointmentModalLite';
import { TransparencyModal } from './components/TransparencyModal/TransparencyModal';
import { ProgressComparison } from './components/ProgressBar/ProgressBar';
import { useMedia } from '@/hooks/useMedia';

type TInputData = {
    typeOfUse: 'business' | 'privat';
    address: string;
    ownerType: 'Norm' | 'Wald' | 'Acker' | 'Bauernhof' | 'Wiese';
    solarData: number; // солнечная энергия (Einstralung)
    year: string; // год постройки
    nominalExit: string; // мощность, кВт
    nearBy: unknown[];
    absolutePollution: number;
    efficiencyLoss: number;
    energyGeneration: string; // сколько всего кВт*ч
    selfConsumptionEnergy: string; // сколько потребляется
    price: string;
};

type TStepProps = {
    onBack: () => void;
    data: TInputData;
};

// const verschmutzungsTabelle: Record<string, number[]> = {
//     Norm: [0.04, 0.06, 0.078, 0.0942],
//     Wald: [0.064, 0.096, 0.125, 0.151],
//     Acker: [0.068, 0.102, 0.1326, 0.1601],
//     Bauernhof: [0.088, 0.132, 0.1716, 0.2072],
//     Wiese: [0.048, 0.072, 0.0936, 0.113]
// };

export const StepSixth: FC<TStepProps> = ({ onBack, data }) => {
    const {
        isOpen: isOpenTransparencyModal,
        onOpen: onOpenTransparencyModal,
        onClose: onCloseTransparencyModal
    } = useModal();

    const {
        isOpen: isOpenAppointmentModal,
        onOpen: onOpenAppointmentModal,
        onClose: onCloseAppointmentModal
    } = useModal();

    const isMobile = useMedia("max-width", "md");
    const layout = isMobile ? "vertical" : "horizontal";

    const mReinigung =
        data.solarData *
        Number(data.price) *
        (data.absolutePollution / 100) *
        ((100 - data.efficiencyLoss) / 100);

    const age = Number(new Date().getFullYear()) - Number(data.year);

    console.log('mReinigung', mReinigung);
    return (
        <div >
            <div className={s.container}>
                <div className={s.textWrapper}>
                    <Typography variant={'body3'} className={s.title}>
                        Sie sparen in
                        <br className={s.brBeforeAge} /> <span className={s.age}>{age} Jahren&nbsp;</span>
                        <span className={s.titleInner}>
                            bis zu&nbsp;
                            <br className={s.brBeforeLossMoney} />
                            <span className={s.lossMoney}>
                                824,84 €
                                <button className={s.infoButton} onClick={onOpenTransparencyModal} type="button">
                                    <Image
                                        src="/img/home/calculatorSection/stepSixth/info.png"
                                        alt="Info"
                                        width={19}
                                        height={19}
                                    />
                                </button>
                            </span>
                        </span>
                    </Typography>

                    <ul className={s.list}>
                        <li className={s.item}>
                            <SheetIcon />
                            <Typography variant={'body3'} className={s.itemText}>
                                <span className={s.itemTextSpan}>Bis zu 90 %</span> weniger CO₂
                                durch Solarenergie.
                            </Typography>
                        </li>
                        <li className={s.item}>
                            <GraphIcon />
                            <Typography variant={'body3'} className={s.itemText}>
                                bis zu <span className={s.itemTextSpan}>50%</span> Verlängerung der
                                Lebensdauer
                            </Typography>
                        </li>
                        <li className={s.item}>
                            <DollarIcon />
                            <Typography variant={'body3'} className={s.itemText}>
                                Keine teuren Reparaturen durch Witterungschäden
                            </Typography>
                        </li>
                    </ul>
                </div>
                <ProgressComparison
                    years={4}
                    withCleaning={659.94}
                    withoutCleaning={1484.78}
                    layout={layout}
                />
                <div className={s.orderContainer}>
                    <Typography variant="body3" className={s.orderText}>
                        Jetzt kostenlosen&nbsp;
                        <br className={s.br} />
                        Wärmebild-Prüfung vereinbaren
                        &nbsp;<span className={s.orderFree}>Free</span>


                    </Typography>
                    <Button
                        type="button"
                        className={`${s.orderButton} `}
                        onClick={onOpenAppointmentModal}
                    >
                        Einen Termin vereinbaren
                    </Button>
                    <BookAppointmentModalLite isOpen={isOpenAppointmentModal} onClose={onCloseAppointmentModal} />
                    <TransparencyModal isOpen={isOpenTransparencyModal} onClose={onCloseTransparencyModal} />
                </div>
            </div>
            <div className={s.buttonsBox}>
                <Button
                    type="button"
                    buttonType="buttonWithArrow"
                    className={`${s.button} ${s.buttonBack}`}
                    onClick={onBack}
                >
                    Zurück
                </Button>
            </div>
        </div >
    );
};
