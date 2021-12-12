import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(12)].map((_, index) => ({
  id: faker.datatype.uuid(),
  type: sample(['Health Talk', 'Wellness Events', 'Fitness Activities']),
  location: faker.address.streetAddress(true),
  datetime: '12/12/2021 10:00:00',
  status: sample(['pendingReview', 'approved', 'rejected'])
}));

export default users;
