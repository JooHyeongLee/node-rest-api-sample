/** 
 * Mqtt Server(mosca)
 *
 * (c) 2020 jhlee
 * Author : jhlee@cufit.net
 */

import _mosca from 'mosca';
import { logger } from './logger';

class Mosca {
    mosca: any

    constructor(){
        
    }

    init() {
        const listener = {
            //using ascoltatore
            type: 'mongo',
            url: 'mongodb://localhost:27017/mqtt',
            pubsubCollection: 'listener',
            mongo: {}
        }
        
        const settings = {
            port: 1883,
            backend: listener 
        }
        
        this.mosca = new _mosca.Server(settings);

        this.mosca.on('clientConnected', (client: { id: any; })=>{
            logger.info(`client connected : ${client.id}`);
        });

        // fired when a message is received
        this.mosca.on('published', function(packet: any, client: any) {
            logger.info(`Published ${packet.payload}`);
        });
        
        // mosca server start
        this.mosca.on('ready', ()=>{
          logger.info('Mosca server is up and running');
        });
    }
}

export const mosca = new Mosca();
