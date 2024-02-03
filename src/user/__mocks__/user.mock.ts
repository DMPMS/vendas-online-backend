import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '123543543',
  createdAt: new Date(),
  email: 'emailmock@emali.com',
  id: 43242,
  name: 'nameMock',
  password: '$2b$10$JLeqVUv4UFXRzfWDW0x/m.qC3t1/Os2zItMa2S.IMNjhx583hZp8K',
  phone: '321532523532',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
