/** 
 * MQTT Client
 *
 * (c) 2020 jhlee
 * Author : jhlee@cufit.net
 */

import _mqtt, { MqttClient } from 'mqtt';

export class Mqtt {
    public client: MqttClient;

    constructor() {
        this.conn();
    }

    // 연결
    async conn() {
        this.client = _mqtt.connect('mqtt://localhost:1883')
    }

    // 구독
    async subscribe(topic: string) {
        this.client.subscribe(topic);
    }

    // 발행
    async publish(topic: string, message: string) {
        this.client.publish(topic, message);
    }
}

export const mqtt = new Mqtt();
