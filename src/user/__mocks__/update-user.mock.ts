import { UpdatePasswordDto } from '../dtos/update-password.dto';

export const updatePasswordMock: UpdatePasswordDto = {
  lastPassword: 'davi',
  newPassword: 'fdsafj',
};

export const updatePasswordInvalidMock: UpdatePasswordDto = {
  lastPassword: 'lkfdjsa',
  newPassword: 'flkjbla',
};
