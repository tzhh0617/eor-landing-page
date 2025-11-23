import React from 'react';

export interface CountryInfo {
  countryName: string;
  employerTaxRange: string;
  probationPeriod: string;
  mandatoryBenefits: string[];
  terminationNotice: string;
  currency: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}