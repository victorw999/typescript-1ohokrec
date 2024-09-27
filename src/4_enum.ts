enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

function isItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}

console.log('===> isItSummer(Month.Jun) ', isItSummer(Month.Jun)); // arg is a enum ==> true
console.log('===> isItSummer(5) ', isItSummer(5)); // arg is a number ==> true
console.log('===> Month.Jun ', Month.Jun);
console.log('===> Month[5] ', Month[5]);
console.log('===> Month["Jun"] ', Month['Jun']);
console.log('===> Month', Month);

enum Month2 {
  Jan = 6,
  Feb,
  Mar,
}

console.log('===> Month2', Month2);

enum statusEnum {
  draft,
  submitted,
  approved,
  rejected,
}

console.log('===> statusEnum', statusEnum);

const request = {
  id: 1,
  status: statusEnum.approved,
  description: 'Please approve this request',
};

if (request.status === statusEnum.approved) {
  // send an email
  console.log('Send email to the Applicant...');
}
