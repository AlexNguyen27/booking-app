import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(12)].map((_, index) => ({
  id: faker.datatype.uuid(),
  // avatarUrl: mockImgAvatar(index + 1),
  type: sample(['Health Talk', 'Wellness Events', 'Fitness Activities']),
  location: faker.address.streetAddress(true),
  datetime: new Date().toString(),
  status: sample(['pendingReview', 'approved', 'rejected'])
  // role: sample([
  //   'Leader',
  //   'Hr Manager',
  //   'UI Designer',
  //   'UX Designer',
  //   'UI/UX Designer',
  //   'Project Manager',
  //   'Backend Developer',
  //   'Full Stack Designer',
  //   'Front End Developer',
  //   'Full Stack Developer'
  // ])
}));

export default users;
