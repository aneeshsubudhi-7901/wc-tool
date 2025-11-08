type AvailableOption = {
  short: string | null;
  long: string;
  description: string;
};

type OutputStat = {
  option: string;
  count: number;
};

export { AvailableOption, OutputStat };
