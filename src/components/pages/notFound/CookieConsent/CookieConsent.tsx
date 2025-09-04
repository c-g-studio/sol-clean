'use client';

import { useState, useEffect } from 'react';
import s from './styles.module.scss';
import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';
import { Button } from '@/components/common/Button/Button';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = (): void => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const handleNecessaryOnly = (): void => {
    localStorage.setItem('cookieConsent', 'necessary');
    setIsVisible(false);
  };

  const handleSettings = (): void => {
    // тут можна викликати модалку з категоріями
    alert('Тут можуть бути детальні cookie-налаштування :)');
  };

  if (!isVisible) return null;

  return (
    <div className={s.banner}>
      <AppContainer>
        <Typography variant={'h2'} className={s.title}>
          Ihre Cookie-Einstellungen
        </Typography>

        <Typography variant={'body1'} className={s.text}>
          Wir verwenden Cookies, um die Funktionalität unserer Website
          sicherzustellen, Ihre Erfahrung zu optimieren und Ihnen relevante
          Inhalte bereitzustellen. Diese helfen uns, die Nutzung der Plattform
          zu analysieren, unsere Dienstleistungen zu verbessern und Inhalte
          individuell anzupassen. Wenn Sie „Alle akzeptieren“ wählen, können wir
          Ihnen die bestmögliche Erfahrung bieten und die Leistung der Website
          weiter optimieren. Sie können jedoch auch nur notwendige Cookies
          zulassen oder Ihre Einstellungen individuell anpassen.
          <br />
          Um Ihre Präferenzen zu ändern, klicken Sie auf „Cookie-Einstellungen“.
          Weitere Informationen finden Sie in unserer{' '}
          <a href="/datenschutz" className={s.link}>
            Datenschutzrichtlinie
          </a>
          .
        </Typography>
        <div className={s.actions}>
          <Button onClick={handleAcceptAll} className={s.acceptAll}>
            Alle akzeptieren
          </Button>
          <Button
            variant="secondary"
            onClick={handleNecessaryOnly}
            className={s.necessary}
          >
            Nur notwendige
          </Button>
          <Button
            variant="secondary"
            onClick={handleSettings}
            className={s.settings}
          >
            Cookie-Einstellungen
          </Button>
        </div>
      </AppContainer>
    </div>
  );
};
