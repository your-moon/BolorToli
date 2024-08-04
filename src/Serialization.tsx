interface Er {
  phr: any;
  t: T;
  t_id: number;
  w: W;
}

interface T {
  l_id: number;
  snd: any;
  vars: Array<TVars>;
}

interface TVars {
  acro: string;
  dsc: string;
  is_link: boolean;
  pho: string;
  tags?: Tag;
  w: string;
}

interface Tag {
  class: string;
}

interface W {
  l_id: number;
  snd: any;
  vars: Array<TranslatedWord>;
}

interface TranslatedWord {
  w: string;
  dsc: string;
  tags: string;
  pho: string;
  acro: string;
}

export interface TranslationSerdeData {
  er?: Array<Er>;
  er_cnt: number;
  sr: Array<any>;
  sr_cnt: number;
  to_mn: boolean;
}

export interface TranslationSerde {
  data: TranslationSerdeData;
  type: string;
}

export interface SuggestionObj {
  type: string;
  data: string;
}

export enum TranslationStatus {
  OK = "ok",
  ERROR = "error",
  INVALID = "invalid",
}

export interface BolorResponse {
  status: TranslationStatus;
  data?: string;
  message?: string;
}
