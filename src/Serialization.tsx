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

interface TranslationSerde {
  data: {
    er?: Array<Er>;
    er_cnt: number;
    sr: Array<any>;
    sr_cnt: number;
    to_mn: boolean;
  };
  type: string;
}

interface SuggestionObj {
  type: string;
  data: string;
}

interface BolorResponse {
  type: string;
  data: string;
  message?: string;
}
