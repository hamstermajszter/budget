import { Envelope } from "@app/shared/model/envelope";

export class EnvelopeService {
    private envelopes: Envelope[] = [
        new Envelope('Household', 80000),
        new Envelope('Fun', 50000)
    ];

    public getEnvelopes() {
        return this.envelopes.slice();
    }
}