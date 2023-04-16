import axios from 'axios';

const mock = jest.genMockFromModule('axios') as jest.Mocked<typeof axios>;

mock.create = jest.fn(() => mock);

export default mock;
