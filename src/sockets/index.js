import Debug from 'debug';
import setupSocketHandler from './handler';

const debug = Debug('feathers-authentication:sockets');

export function socketioHandler(app, options = {}) {
  debug('Setting up Socket.io authentication middleware with options:', options);

  const providerSettings = {
    provider: 'socketio',
    emit: 'emit',
    disconnect: 'disconnect',
    feathersParams(socket) {
      return socket.feathers;
    }
  };

  return setupSocketHandler(app, options, providerSettings);
}

export function primusHandler(app, options = {}) {
  debug('Setting up Primus authentication middleware with options:', options);

  const providerSettings = {
    provider: 'primus',
    emit: 'send',
    disconnect: 'disconnection',
    feathersParams(socket) {
      return socket.request.feathers;
    }
  };

  return setupSocketHandler(app, options, providerSettings);
}
