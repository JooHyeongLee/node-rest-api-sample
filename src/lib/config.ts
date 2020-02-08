import {ormConfig} from '../config/ormconfig';
import {development} from '../config/development';
import {production} from '../config/production';

// Config Class
class Config {

    // Common 설정 객체
    public common: any;
    // TypeORM 설정 객체
    public orm: any;

    // 기본 생성자
    constructor() {
        this.init();
    }

    // Config 설정 초기화
    async init() {
        // 상용일 때
        if(process.env.NODE_ENV === 'production') {
            this.orm = ormConfig.development;
            this.common = production;
        } 
        // 개발일 때
        else {
            this.orm = ormConfig.production;
            this.common = development;
        }
    }
}

export const config = new Config();