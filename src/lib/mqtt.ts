/** 
 * MQTT Client
 *
 * (c) 2020 jhlee
 * Author : jhlee@cufit.net
 */

import _mqtt, { MqttClient } from 'mqtt';
import { logger } from './logger';
import { config } from './config';

export class Mqtt {
    public client: MqttClient;
    static topic: string

    constructor() {
        this.conn();
    }

    // 연결
    async conn() {
        this.client = _mqtt.connect(`mqtt://${config.orm.host}:1883`);
    }

    // 구독
    async subscribe(topic: string) {
        Mqtt.topic = topic;
        this.client.subscribe(topic);
    }

    // 발행
    async publish(topic: string, message: string) {
        this.client.publish(topic, message);
    }
}

export const mqtt = new Mqtt();
