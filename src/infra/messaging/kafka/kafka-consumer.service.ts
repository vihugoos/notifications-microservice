import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
    extends ServerKafka
    implements OnModuleDestroy
{
    constructor() {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['probable-bison-7940-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username:
                        'cHJvYmFibGUtYmlzb24tNzk0MCTVI0QD3J3WxGJtAQVJBst3wbLeoKqpacpTUHQ',
                    password: 'ff70888deec04e97a2b468c66d53dd3e',
                },
                ssl: true,
            },
        });
    }

    async onModuleDestroy() {
        await this.close();
    }
}
