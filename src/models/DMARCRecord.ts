import { DMARCVersionTag } from './DMARCRecordTags/DMARCVersionTag';
import { PolicyTag } from './DMARCRecordTags/PolicyTag';
import { DMARCVersion } from './DMARCVersionType';

export class DMARCRecord {
    private record: string;

    constructor(txtrecord: string) {
        this.record = txtrecord;
    }

    public isValidRecord(): Boolean {
        let isValid: Boolean = true;

        return isValid;
    }


}