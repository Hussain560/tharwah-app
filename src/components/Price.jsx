import React from 'react';
import { useTranslation } from 'react-i18next';
const SARIcon = '/Saudi_Riyal_Symbol.svg';

// Always render SAR icon visually to the left of the number, even in RTL, and before minus sign for negatives
export default function Price({ amount }) {
  const { i18n } = useTranslation();
  const isNegative = parseFloat(amount) < 0;
  const absValue = Math.abs(parseFloat(amount || 0)).toFixed(2);
  // Use flex-row for LTR, flex-row-reverse for RTL, but always render icon first in DOM
  // This keeps icon visually left in both directions
  return (
    <span
      className={
        'whitespace-nowrap inline-flex items-baseline align-baseline' +
        (i18n.dir() === 'rtl' ? ' flex-row-reverse' : ' flex-row')
      }
      style={{ gap: '0.25em' }}
    >
      <img
        src={SARIcon}
        alt="SAR"
        className="inline-block h-[1em] w-auto align-baseline"
        style={{ flexShrink: 0 }}
      />
      <span>{isNegative ? `-${absValue}` : absValue}</span>
    </span>
  );
}



