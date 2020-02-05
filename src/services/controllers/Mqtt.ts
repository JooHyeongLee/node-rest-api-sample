import mqtt, { MqttClient } from 'mqtt';

export class Mqtt {
    private static instance: Mqtt;
    private client: MqttClient
    constructor() {
        this.conn();
    }

    public static getInstance(): Mqtt {
        if (!Mqtt.instance) {
            Mqtt.instance = new Mqtt();
        }

        return Mqtt.instance;
    }

    // 연결
    async conn() {
        this.client = mqtt.connect('mqtt://localhost:1883')
    }

    async subscribe(topic: string) {
        this.client.subscribe(topic);
    }

    // 발행
    async publish(topic: string, message: string) {
        this.client.publish(topic, message);
    }
}
