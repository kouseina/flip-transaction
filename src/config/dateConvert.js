export default data => {
  let dataDate = data;
  dataDate = dataDate.replace(' ', 'T');
  dataDate = dataDate + 'Z';
  dataDate = new Date(dataDate);

  const result = `${dataDate.getDate()} ${
    month[dataDate.getMonth()]
  } ${dataDate.getFullYear()}`;

  return result;
};

const month = [
  'Januari',
  'Febuari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'December',
];
