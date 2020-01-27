import _mosca from 'mosca';
import { logger } from './logger';
const mosca = async() =>{
    const ascoltatore = {
        //using ascoltatore
        type: 'mongo',
        url: 'mongodb://localhost:27017/mqtt',
        pubsubCollection: 'ascoltatori',
        mongo: {}
    }
    const settings = {
        port: 1883,
        backend: ascoltatore
    }
    
    const mosca = new _mosca.Server(settings);
    
    mosca.on('clientConnected', (client: { id: any; })=>{
        logger.info('client connected', client.id);
    });
    
    mosca.on('published', (packet, client) =>{
      logger.info('Published', packet.payload);
    });
    
    mosca.on('ready', ()=>{
      logger.info('Mosca server is up and running');
    });
};

export {mosca}