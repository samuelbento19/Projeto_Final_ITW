dayjs();

export function dataHojeExtenso() {
  const today = dayjs().locale('pt-br').format('dddd, D [de] MMMM [de] YYYY');
  return today;
} 
