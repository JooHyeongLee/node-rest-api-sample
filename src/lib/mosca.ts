/** 
 * Mqtt Server(mosca)
 *
 * (c) 2020 jhlee
 * Author : jhlee@cufit.net
 */

import _mosca from 'mosca';
import { logger } from './logger';
import { chattingService } from '../controllers/services/chatting';
import { config } from './config';

class Mosca {
    broker: any

    constructor(){
    }

    init() {
        const listener = {
            //using ascoltatore
            type: 'mongo',
            url: `mongodb://${config.orm.host}:27017/mqtt`,
            pubsubCollection: 'listener',
            mongo: {}
        }
        
        const settings = {
            port: 1883,
            backend: listener 
        }
        
        this.broker = new _mosca.Server(settings);

        // fired when a message is received
        this.broker.on('published', async function(packet: any, client: any) {
            if(client) {
                logger.info(`${client.id} : 메세지 전파 ${packet.payload}`);
            }
        });

        // client connected
        this.broker.on('clientConnected', (client: { id: any; })=>{
            logger.info(`client connected : ${client.id}`);
        });

        // mosca broker start
        this.broker.on('ready', ()=>{
          logger.info('Mosca broker is up and running');
        });

    }
}

export const mosca = new Mosca();
