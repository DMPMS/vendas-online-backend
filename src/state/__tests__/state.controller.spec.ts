import { Test, TestingModule } from '@nestjs/testing';
import { StateController } from '../state.controller';
import { StateService } from '../state.service';
import { stateMock } from '../__mocks__/state.mock';

describe('StateController', () => {
  let controller: StateController;
  let stateService: StateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: StateService,
          useValue: {
            findAllState: jest.fn().mockResolvedValue([stateMock]),
          },
        },
      ],
      controllers: [StateController],
    }).compile();

    controller = module.get<StateController>(StateController);
    stateService = module.get<StateService>(StateService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(stateService).toBeDefined();
  });

  it('should return stateEntity in findAllState', async () => {
    const state = await controller.findAllState();

    expect(state).toEqual([stateMock]);
  });
});
