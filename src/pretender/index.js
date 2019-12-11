import Pretender from 'pretender';
import applicationsPretender from '../redux/reducers/pretender/applications'

export const init = () => {
  const server = new Pretender(
    applicationsPretender
  )

  server.handledRequest = function handledRequest(verb, path, request) {
    console.info(`[Pretender] ${verb} ${path}`, request);
  };
}

export default init;
