import mqtt, { MqttClient } from 'mqtt';


export class Mqtt {
    public static instance: Mqtt;
    public client: MqttClient;
    static test: Mqtt;

    constructor() {
        this.conn();
    }

    public static get getInstance(): Mqtt {
        if (!Mqtt.instance) {
            Mqtt.instance = new Mqtt();
        }
        return Mqtt.instance;
    }

    // 연결
    async conn() {
        this.client = mqtt.connect('mqtt://localhost:1883')
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
