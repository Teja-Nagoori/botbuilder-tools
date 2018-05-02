/**
 * Copyright(c) Microsoft Corporation.All rights reserved.
 * Licensed under the MIT License.
 */
import { IQnAService, ServiceType } from '../schema';
import { ConnectedService } from './connectedService';

export class QnaMakerService extends ConnectedService implements IQnAService {
    public readonly type = ServiceType.QnA;
    public kbId = '';
    public subscriptionKey = '';
    public hostname = '';
    public endpointKey = '';

    constructor(source: IQnAService = {} as IQnAService) {
        super(source);
        const { kbId = '', name = '', subscriptionKey = '', endpointKey = '', hostname = '' } = source;
        Object.assign(this, { kbId, name, subscriptionKey, endpointKey, hostname });
    }

    public toJSON(): IQnAService {
        const { kbId, id, name, subscriptionKey, endpointKey, hostname } = this;
        return { kbId, name, type: ServiceType.QnA, subscriptionKey, id, endpointKey, hostname };
    }
}
