interface Er {
  phr: any;
  t: any;
  t_id: number;
  w?: W;
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

interface ReqObj {
  data: {
    er?: Array<Er>;
    er_cnt: number;
    sr: Array<any>;
    sr_cnt: number;
    to_mn: string;
  };
  type: string;
}
